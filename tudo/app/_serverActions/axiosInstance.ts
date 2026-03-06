'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { api } from "./axios"
import { redirect } from "next/navigation"


export const serverApi = async (config: any) => {

    const cookieStore = await cookies();
    let access = cookieStore.get('access_token')?.value
    let refresh = cookieStore.get('refresh_token')?.value

    try{
        return await api({...config, headers: {Authorization: `Bearer ${access}`}});
    }catch(err){
        if (axios.isAxiosError(err) && err?.response?.status === 401 && refresh){
            try{
                const r = await api.post('refresh/', {refresh})
                const access = r.data.access
                cookieStore.set('access_token', access, {httpOnly: true, secure: false, sameSite: 'lax'});
                const ready = await api({...config, headers: {Authorization: `Bearer ${access}`}})
                return ready;
            }catch{
                cookieStore.delete('access_token');
                cookieStore.delete('refresh_token');
                // redirect('/singIn')
                throw new Error('refreshTokenInvalid');
            }
        }else{
            throw axios.isAxiosError(err) && err?.response?.data;
        }
    }
}
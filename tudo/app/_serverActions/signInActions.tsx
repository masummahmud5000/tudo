'use server'
import axios from "axios";
import { cookies } from "next/headers";
import { api } from "./axios";

const SignInActions = async(userName: string,password: string) => {

    const dataSet = {
        username: userName,
        password: password
    };

    try{
        const res = await api.post("signin/", dataSet);
        const setCookie = res.headers['set-cookie'];
        console.log(res.data.name)
        if (setCookie && Array.isArray(setCookie)){
            const cookieStore = await cookies();
            
            setCookie.forEach(cookieString => {
                const parts = cookieString.split(';');
                const [name,value] = parts[0].split('=');

                cookieStore.set(name,value,{httpOnly: true, sameSite: 'lax', secure: false, maxAge: 60 * 3})
            })
        };
        // console.log(res.status)
        return{status: res.status, data: res?.data};
    }catch(err: any){
        return err.response?.data;
    }
}
export default SignInActions;
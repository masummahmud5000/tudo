'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LogOut = async() => {
    try{
        let cookieStore = await cookies();
        const access = cookieStore.get('access_token')
        const refresh = cookieStore.get('refresh_token')
        
        if (!refresh || !access){
            redirect("/singIn")
        }else{
            cookieStore.delete('access_token')
            cookieStore.delete('refresh_token')
            redirect("/singIn")
        }
        
    }finally{
        redirect("/singIn")
    }
}
export default LogOut;
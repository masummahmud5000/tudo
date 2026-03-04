'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LogOut = async() => {
    try{
        let cookieStore = await cookies();

        cookieStore.delete('access_token');
        cookieStore.delete('refresh_token');
        redirect("/singIn")
    }finally{

    }
}
export default LogOut;
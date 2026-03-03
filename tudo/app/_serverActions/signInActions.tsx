'use server'
import axios from "axios";
import { cookies } from "next/headers";

const SignInActions = async(userName: string,password: string) => {

    const dataSet = {
        username: userName,
        password: password
    };

    try{
        const res = await axios.post("http://127.0.0.1:8000/signin/", dataSet);
        const setCookie = res.headers['set-cookie'];
        if (setCookie && Array.isArray(setCookie)){
            const cookieStore = await cookies();

            setCookie.forEach(cookieString => {
                const parts = cookieString.split(';');
                const [name,value] = parts[0].split('=');

                cookieStore.set(name,value,{httpOnly: true, sameSite: 'lax', secure: false})
            })
        }
        console.log(res.status)
        return res?.status;

    }catch(err: any){

        console.log(err.response?.data);
        return err.response?.data;
    }
}
export default SignInActions;
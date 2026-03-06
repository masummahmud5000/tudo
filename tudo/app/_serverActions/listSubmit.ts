'use server'
import { redirect } from "next/navigation";
import { serverApi } from "./axiosInstance";

const ListSubmit = async(subject: string,text: string) => {
    const dataSet: {subject: string, text: string} = {
        subject: subject,
        text: text
    };

    try{
        const res = await serverApi({url: 'textbox/', method: 'post', data: dataSet})
        return res?.status;
    }catch(err: any){
        if(err.message === 'refreshTokenInvalid'){
            redirect('/signIn');
        }else{
            return err;
        }
    }

}
export default ListSubmit;
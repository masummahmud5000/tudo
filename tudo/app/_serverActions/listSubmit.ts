'use server'
import { serverApi } from "./axiosInstance";

const ListSubmit = async(subject: string,text: string) => {
    const dataSet: {subject: string, text: string} = {
        subject: subject,
        text: text
    };

    try{
        const res = await serverApi({url: 'textbox/', method: 'post', data: dataSet})
    }catch(err: any){
        console.log(err.message || err)
    }

}
export default ListSubmit;
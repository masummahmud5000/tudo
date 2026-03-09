'use server'
import { serverApi } from "./axiosInstance";

const List = async() => {
    try{
        const res = await serverApi({url: 'list/', method: 'get'})
        return res?.data;
    }catch(err: any){
        
    }
}
export default List;
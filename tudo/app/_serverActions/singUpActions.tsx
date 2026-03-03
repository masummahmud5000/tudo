'use server'
import axios from "axios";

const SingUpActions = async(name: string,userName: string,password: string) => {

    const dataSet = {
        name: name,
        username: userName,
        password: password
    };

    try{
        const res = await axios.post("http://127.0.0.1:8000/singup/", dataSet);
        // console.log(res.status)
        if (res?.status === 201){
            return res?.status;
        }

    }catch(err: any){

        // console.log(err.response?.data);
        return err.response?.data;
    }
}
export default SingUpActions;
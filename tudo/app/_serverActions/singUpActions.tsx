'use server'
import z from "zod"

const SingUpActions = async(name: string,userName: string,password: string) => {
    const formData = {name,userName,password}
    const singUpValidation = z.object({
        name: z.string(),
        userName: z.string().min(8, 'userNameNotStrong'),
        password: z.string().min(8, 'passwordNotStrong')
    });

    const result = singUpValidation.safeParse(formData);
    
    try{
        console.log(result.error?.issues[0].message)
    }catch(err){
        console.log(err);

    }
}
export default SingUpActions;
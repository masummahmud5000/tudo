'use client'
import "@/app/globals.css"
import Link from "next/link";
import { useState } from "react";
import SignInActions from "../_serverActions/signInActions";
import { useRouter } from "next/navigation";

const SingInClient = () => {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false)
    const [userError,setUserError] = useState("")
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const signInHandle = async(e: React.SubmitEvent) => {
        e.preventDefault();
        setIsLoading(true)
        try{
            const res = await SignInActions(userName,password)
            // console.log(res.data, res.status)
            if(res.status === 200){
                setUserName("")
                setPassword("")
                localStorage.setItem('name', res?.data?.name)
                
                router.push('/dashboard')
            }else if(res?.non_field_errors?.includes("userNotFound")){
                setUserError("User-Name or Password invalid")
                setTimeout(()=>setUserError(""),4000)
            }
        }catch{

        }finally{
            setIsLoading(false)
        }
    } 
    
    return(
        <main>
            <form onSubmit={signInHandle} className="singup flex flex-col py-10">

                <label className="text-xl mt-8">User-Name</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-user-tag"></h1>
                    <input value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} className="w-80" type="text" required placeholder="Enter Your User-Name"/>
                </div>
                <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{userError}</h1>

                <label className="text-xl mt-8">Password</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-lock"></h1>
                    <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="w-80" type="password" required placeholder="Enter Your Password"/>
                </div>
                <span className="mt-5 text-blue-700">No Account <Link className="cursor-pointer font-bold" href="/singUp">Create Account</Link></span>
                <button className="mt-8 bg-green-600 py-2 font-bold text-xl rounded-2xl text-white cursor-pointer hover:bg-green-700" type="submit">{isLoading ? <span className="flex justify-center items-center gap-3"><h1 className="fa fa-spinner text-2xl animate-spin"></h1>Proccess...</span> : "LogIn"}</button>
            </form>
        </main>
    )
}
export default SingInClient;
'use client'
import "@/app/globals.css"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SingUpActions from "../_serverActions/singUpActions";

const SingUpClient = () => {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [userNameError,setUserNameError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const signUpHandle = async(e: React.SubmitEvent) => {
        e.preventDefault();
        setIsLoading(true)

        try{
            const res = await SingUpActions(name,userName,password)
            // console.log(res.username)
            if (res === 201){
                setName("")
                setUserName("")
                setPassword("")

                setUserNameError("")
                setPasswordError("")
                router.push('/dashboard')
            }else if(res.username?.includes('userAlreadyExists')){
                setUserNameError('user-name already exists')
                setPasswordError("")
                setTimeout(() => setUserNameError(""), 4000)

            }else if(res.username?.includes('usernameNotStrong')){
                setUserNameError('user-name not strong, hard plz')
                setPasswordError("")
                setTimeout(() => setUserNameError(""),4000)

            }else if(res.password?.includes('passwordNotStrong')){
                setPasswordError('minimum password 8 digit')
                setUserNameError('')
                setTimeout(() => setPasswordError(''), 4000)
            }else{
                console.log(res)
            };
        }catch (err){

        }finally{
            setIsLoading(false)
        }
    }
    
    return(
        <main>
            <form onSubmit={signUpHandle} className="singup flex flex-col py-10">
                <label className="text-xl">Name</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-user"></h1>
                    <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className="w-80" type="text" required placeholder="Enter Your Name"/>
                </div>

                <label className="text-xl mt-8">User-Name</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-user-tag"></h1>
                    <input value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} className="w-80" type="text" required placeholder="Create Uniqee User-Name"/>
                </div>
                <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{userNameError}</h1>

                <label className="text-xl mt-8">Password</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-lock"></h1>
                    <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="w-80" type="password" required placeholder="Create Uniqee Password"/>
                </div>
                <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{passwordError}</h1>

                <span className="mt-5 text-blue-700">Already sing-up <Link className="cursor-pointer font-bold" href="/signIn">LogIn</Link></span>
                <button className="mt-8 bg-green-600 py-2 font-bold text-xl rounded-2xl text-white cursor-pointer hover:bg-green-700" type="submit">{isLoading ? <span className="flex justify-center items-center gap-3"><h1 className="fa fa-spinner text-2xl animate-spin"></h1>Proccess...</span> : "Submit"}</button>
            </form>
        </main>
    )
}
export default SingUpClient;
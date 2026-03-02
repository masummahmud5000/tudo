'use client'
import "@/app/globals.css"
import Link from "next/link";
import { useState } from "react";
import SingUpActions from "../_serverActions/singUpActions";

const SingUpClient = () => {
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const signUpHandle = async(e: React.SubmitEvent) => {
        e.preventDefault();
        try{
            const res = await SingUpActions(name,userName,password)
        }catch (err){

        }
    }
    
    return(
        <main>
            <form onSubmit={signUpHandle} className="singup flex flex-col py-10">
                <label className="text-xl">Name</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-user"></h1>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className="w-80" type="text" required placeholder="Enter Your Name"/>
                </div>

                <label className="text-xl mt-8">User-Name</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-user-tag"></h1>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} className="w-80" type="text" required placeholder="Create Uniqee User-Name"/>
                </div>

                <label className="text-xl mt-8">Password</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-amber-600">
                    <h1 className="fa fa-lock"></h1>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="w-80" type="password" required placeholder="Create Uniqee Password"/>
                </div>
                <span className="mt-5 text-red-700">Already sing-up <Link className="cursor-pointer font-bold" href="/singIn">LogIn</Link></span>
                <button className="mt-8 bg-green-600 py-2 font-bold text-xl rounded-2xl text-white cursor-pointer hover:bg-green-700" type="submit">Submit</button>
            </form>
        </main>
    )
}
export default SingUpClient;
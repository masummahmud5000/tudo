'use client'
import Link from "next/link";
import { useState, useEffect } from "react"
import LogOut from "../_serverActions/logout";
import ListSubmit from "../_serverActions/listSubmit";


export default function UserName (){
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [hide,setHide] = useState(false);
    const [fetchName,setfetchName] = useState<string>('');
    const [subject,setSubject] = useState("")
    const [textBox,setTextBox] = useState("")

    const [subError,setSubError] = useState<string>("")
    const [textError,setTextError] = useState<string>("")

    function triggerLogout(){
        LogOut()
        localStorage.removeItem('name');
    };

    useEffect(() => {
        const userName = localStorage.getItem('name')
        if (userName){
            setfetchName(userName)
        }
    },[])

    async function listSubmit(e: React.SubmitEvent){
        e.preventDefault()
        setIsLoading(true)
        try{
            const res = await ListSubmit(subject,textBox);
            // console.log(res.subject.includes('subjectTextOnly20Char'))
            if (res === 201){
                setSubject('')
                setTextBox('')

                setSubError("")
                setTextError("")
                setTimeout(()=>setHide(false),500)
            }else if(res?.subject?.includes('subjectTextOnly20Char')){
                setSubError("Maximum 20 Character")
                setTextError("")
                setTimeout(()=>setSubError(""),4000)
            }else if(res?.text?.includes('textOnly500Char')){
                setTextError('Maximum 500 Character')
                setSubError("")
                setTimeout(()=>setTextError(""),4000)
            }
        }finally{
            setIsLoading(false)
        }
    }
    
    return(
        <main>
    
            <div className="relative bg-amber-700 py-5 px-5 flex flex-col gap-5 rounded-2xl">
                <h1 className="text-lg text-white">User Name : <span className="font-bold">{fetchName ? fetchName : 'Not Found'}</span></h1>

                <div className="flex gap-5">
                    <span onClick={() => setHide(!hide)} className="bg-green-600 hover:bg-green-700 text-center py-1  px-3 text-bold text-white rounded-lg cursor-pointer">+ Add List</span>
                    <Link href='/dashboard/listItems/' className="bg-blue-300 hover:bg-red-400 text-center py-1  px-3 text-bold rounded-lg cursor-pointer">List Items</Link>

                    <h1 onClick={triggerLogout} className="fa fa-right-from-bracket cursor-pointer absolute right-5 bottom-5 text-2xl text-red-600 bg-white rounded-xl p-1"></h1>
                </div>
            </div>
            <hr className="mt-10"/>
            {hide && <form onSubmit={listSubmit} className="singup flex flex-col py-5">
                <label className="text-xl mt-8">Subject</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-blue-600">
                    <h1 className="fa fa-book"></h1>
                    <input value={subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} className="w-80" type="text" required placeholder="Enter Your Subject"/>
                </div>

                <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{subError}</h1>

                <label className="text-xl mt-8">Text Box</label>
                <div className="flex gap-2 items-center mt-4 text-xl">
                    <textarea value={textBox} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextBox(e.target.value)} placeholder="Type Here" required className="border-2 border-blue-600 py-1 px-1 w-full h-30 rounded-xl" aria-placeholder="Type Your Text Content"></textarea>
                </div>
                <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{textError}</h1>
                <button className="mt-8 bg-green-600 py-2 font-bold text-xl rounded-2xl text-white cursor-pointer hover:bg-green-700" type="submit">{isLoading ? <span className="flex justify-center items-center gap-3"><h1 className="fa fa-spinner text-2xl animate-spin"></h1>Proccess...</span> : "Add List"}</button>
            </form>}
    
        </main>
    )
}
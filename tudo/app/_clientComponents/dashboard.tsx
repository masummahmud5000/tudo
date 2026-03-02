'use client'
import Link from "next/link";
import { useState } from "react"


export default function UserName (){
    const [hide,setHide] = useState(false);
    
    return(
        <main>
            <div className="relative bg-amber-700 py-5 px-5 flex flex-col gap-5 rounded-2xl">
                <h1 className="text-lg text-white">User Name : <span className="font-bold">masum000</span></h1>

                <div className="flex gap-5">
                    <span onClick={() => setHide(!hide)} className="bg-green-600 hover:bg-green-700 text-center py-1  px-3 text-bold text-white rounded-lg">+ Add List</span>
                    <Link href='#' className="bg-blue-300 hover:bg-red-400 text-center py-1  px-3 text-bold rounded-lg">List Items</Link>

                    <h1 className="fa fa-right-from-bracket absolute right-5 bottom-5 text-2xl text-red-600 bg-white rounded-xl p-1"></h1>
                </div>
            </div>
            <hr className="mt-10"/>
            {hide && <form className="singup flex flex-col py-5">
                <label className="text-xl mt-8">Subject</label>
                <div className="flex gap-2 items-center mt-4 text-xl border-b-2 border-blue-600">
                    <h1 className="fa fa-book"></h1>
                    <input className="w-80" type="text" required placeholder="Enter Your User-Name"/>
                </div>

                <label className="text-xl mt-8">Text Box</label>
                <div className="flex gap-2 items-center mt-4 text-xl">
                    <textarea placeholder="Type Here" required className="border-2 border-blue-600 py-1 px-1 w-full h-30 rounded-xl"></textarea>
                </div>
                <button className="mt-8 bg-green-600 py-2 font-bold text-xl rounded-2xl text-white cursor-pointer hover:bg-green-700" type="submit">Add List</button>
            </form>}
        </main>
    )
}
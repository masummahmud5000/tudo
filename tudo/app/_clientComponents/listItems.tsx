'use client'

import { useState } from "react"
import { serverApi } from "../_serverActions/axiosInstance"

type Props = {
    post: {
        id: number,
        subject: string,
        textbox: string,
        time: string
    }
}
export default function ListItemsClient ({post}: Props) {
    const [edit,setEdit] = useState<boolean>(false)
    const [subject,setSubject] = useState<string>("")
    const [textBox,setTextBox] = useState<string>("")
    const [subjectError,setSubjectError] = useState<string>("")
    const [textError,setTextError] = useState<string>("")

    const deleteHandle = async(id: number) => {
        // setIsLoading(true)
        if (confirm('Are Your Sure Delete this List Item')){
            try{
                const res = await serverApi({url: `delete/${id}/`, method: 'delete'})
                // console.log('del', res.status)
            }finally{
                // setIsLoading(false)
                window.location.reload();
            }
        }
    }

    const editHandle = () => {
        if (confirm("Are Your Sure Edit? this List Item")){
            setEdit(true)
            setSubject(post.subject)
            setTextBox(post.textbox)
        }
    }
    
    const saveHandle = async(id:number) => {
        const dataSet: {subject: string, textbox: string} = {
            subject: subject,
            textbox: textBox
        };
        try{
            if (subject.length > 20 || subject.length < 1){
                setSubjectError("Maximum Character 20 Only")
                setTextError("")
                setTimeout(() => setSubjectError(""),4000)
                
            }else if(textBox.length > 500 || textBox.length < 1){
                setTextError("Maximum Character 500")
                setSubjectError("")
                setTimeout(() => setTextError(""),4000)
                
            }else{
                if (confirm("Are Your Sure Save? this List Item")){
                    const res = await serverApi({url: `delete/${id}/`, method: 'patch', data:dataSet})
                    // console.log(res?.status)
                    setEdit(!edit)

                    setSubjectError('')
                    setTextError('')
                    window.location.reload()
                }
            }
        }catch(err){
            // window.location.reload()
            // console.log(err)
            window.location.reload()
        }
    }
    
    return(
        <div className="hover:bg-blue-400 listBoard bg-blue-300 px-5 py-5 flex flex-col gap-1 rounded-3xl border-3 border-dotted border-blue-700">
            <h1 className="text-lg font-bold text-red-700">ID - {post.id}</h1>
            {edit ? <input value={subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} className="bg-blue-100 w-80 py-1 px-2 rounded-lg" type="text" required placeholder="Enter Your Subject"/> : <h1 className="font-bold text-blue-800">Subject - {post.subject}</h1>}
            <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{subjectError}</h1>
            {edit ? <textarea value={textBox} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextBox(e.target.value)} placeholder="Type Here" required className="border-2 border-blue-600 bg-blue-100 py-1 px-1 w-full h-30 rounded-xl" aria-placeholder="Type Your Text Content"></textarea> : <p className="wrap-break-word bg-blue-100 font-bold text-xl rounded-sm p-2">{post.textbox}</p>}
            <h1 className="text-center text-lg text-red-600 font-bold animate-pulse">{textError}</h1>
            <h1 className="font-bold text-sm text-amber-800">Time - {new Date(post.time).toLocaleTimeString()}</h1>
            <div className="flex relative">
                <h1 className="font-bold text-xl text-amber-700">Date - {new Date(post.time).toLocaleDateString()}</h1>
                <div className="absolute right-1 bottom flex gap-3 hover:bg-green-700 cursor-pointer">
                    {edit ? <button onClick={() => saveHandle(post.id)} className="bg-green-600 py-1 px-5 rounded-xl text-white border-2">Save</button> : <button onClick={editHandle} className="bg-green-600 py-1 px-5 rounded-xl text-white border-2">Edit</button>}
                    <button onClick={()=>deleteHandle(post.id)} className="fa fa-trash text-2xl text-red-700 hover:text-red-800 hover:bg-amber-200 cursor-pointer bg-white rounded-full py-2"></button>
                </div>
            </div>
        </div>
    )
}

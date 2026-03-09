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
    // const [isLoading,setIsLoading] = useState<boolean>(false)
    const deleteHandle = async(id: number) => {
        // setIsLoading(true)
        if (confirm('Are Your Sure Delete this List Item')){
            try{
                const res = await serverApi({url: `delete/${id}/`, method: 'delete'})
                console.log('del', res.status)
            }finally{
                // setIsLoading(false)
                window.location.reload();
            }
        }
    }
    
    return(
        <div className="hover:bg-blue-400 listBoard bg-blue-300 px-5 py-5 flex flex-col gap-1 rounded-3xl border-3 border-dotted border-blue-700">
            <h1 className="text-lg font-bold text-red-700">ID - {post.id}</h1>
            <h1 className="font-bold text-blue-800">Subject - {post.subject}</h1>
            <p className="wrap-break-word bg-blue-100 font-bold text-xl rounded-sm p-2">{post.textbox}</p>
            <h1 className="font-bold text-sm text-amber-800">Time - {new Date(post.time).toLocaleTimeString()}</h1>
            <div className="flex relative">
                <h1 className="font-bold text-xl text-amber-700">Date - {new Date(post.time).toLocaleDateString()}</h1>
                <button onClick={() => deleteHandle(post.id)} className="fa fa-trash absolute right-1 bottom-1 text-2xl text-red-700 hover:text-red-800 hover:bg-amber-200 cursor-pointer bg-white rounded-full py-2"></button>
            </div>
        </div>
    )
}

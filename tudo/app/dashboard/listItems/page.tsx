'use client'

import { useEffect, useState } from "react";
import ListItemsClient from "../../_clientComponents/listItems";
import List from "@/app/_serverActions/list";

const ListItems = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [runLength,setRunLength] = useState<boolean>(false)
    type Post = {
        id: number,
        subject: string,
        textbox: string,
        time: string
    };
    const [item,setItem] = useState<Post[]>([])
    
    useEffect(() => {
        setIsLoading(true)
        async function list() {
            try{
                const res = await List()
                if (res){
                    setIsLoading(false)
                    setItem(res);
                    setRunLength(true)
                }
            }finally{
                setIsLoading(false)
                setRunLength(true)
            }
        }
        list()
    },[])

    return(
        <main className="min-h-screen px-5 py-7 flex flex-col gap-3">
            {runLength && <h1 className="text-center py-1 text-xl font-bold">Total List : <span className="text-red-700">{item.length}</span></h1>}
            {isLoading && <div className="flex flex-col pt-20 items-center"><h1 className="fa fa-spinner text-center text-8xl animate-spin"></h1></div>}
            {
                item.map(post => (
                    <ListItemsClient key={post.id} post={post} />
                ))
            }
        </main>
    )
}
export default ListItems;
'use client'

import { useEffect, useState } from "react";
import ListItemsClient from "../../_clientComponents/listItems";
import List from "@/app/_serverActions/list";

const ListItems = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true)
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
                }
            }finally{
                setIsLoading(false)
            }
        }
        list()
    },[])

    return(
        <main className="min-h-screen px-5 py-10 flex flex-col gap-3">
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
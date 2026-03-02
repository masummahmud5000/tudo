'use client'

export default function UserName (){
    return(
        <h1 className="text-lg text-white">User Name : <span className="font-bold">masum000</span></h1>
    )
}

export function TudoAdd (){
    return(
        <div className="relative">
            <span className="bg-green-600 hover:bg-green-700 text-center py-1  px-3 text-bold text-white rounded-lg">+ Add List</span>
            <h1 className="fa fa-right-from-bracket absolute right-1 bottom-1 text-2xl text-red-600 bg-white rounded-xl p-1"></h1>
                
        </div>
    )
}
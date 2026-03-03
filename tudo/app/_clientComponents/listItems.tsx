'use client'

export default function ListItemsClient () {
    return(
        <div className="bg-blue-300 px-5 py-5 flex flex-col gap-1 rounded-3xl border-3 border-dotted border-blue-700">
            <h1 className="text-lg font-bold text-red-700">ID - 1</h1>
            <h1 className="font-bold text-blue-800">Subject - পাঞ্জাবি</h1>
            <h1><span className="font-bold text-xl text-green-700">Text -</span> ১০ টা পাঞ্জাবি - ৫০০ । ২০ টা পায়জামা - ৮০ ।</h1>
            <h1 className="font-bold text-xl text-amber-700">Date - 03/03/2026</h1>
        </div>
    )
}

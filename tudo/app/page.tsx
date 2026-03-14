'use client'
import "./globals.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  let router = useRouter();
  
  // useEffect(()=>{
  //   function redirect(){
  //     setTimeout(()=> router.push('/namata'),4000)
  //   }
  //   redirect();
  // },[])
  return (
    <main className="flex">
      <h1 className="bg-amber-300">ddd</h1>
      <h1>ddd</h1>
    </main> 
  )
}

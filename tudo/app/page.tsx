import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tudo List",
  description: "Home Page this tudo app"
};

export default function Home() {
  return(
    <main className="px-10 py-30 h-screen flex flex-col items-center gap-35">
      <h1 className="text-xl bg-blue-300 py-3 px-5 text-center rounded-2xl">যেকোনো কিছুর হিসাব রাখতে আমাদের অ্যাপটি ব্যাবহার করতে পারেন!</h1>
      <Link className="bg-green-600 px-10 py-3 text-2xl text-white font-bold rounded-2xl animate-bounce border-2 border-amber-400" href='/signUp'>Account Open Now</Link>
    </main>
  );
}

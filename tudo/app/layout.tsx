import "@/app/globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <nav>
          <div className="bg-green-500 text-white py-5 text-2xl px-5 border-b-6 border-amber-800">
            <h1><span className="text-amber-200 font-bold">Tudo </span>List</h1>
          </div>
          <div className="flex gap-7 lg:gap-30 justify-center items-center bg-green-300 py-1 text-blue-600">
            <Link className="hover:font-bold cursor-pointer" href='/'>Home</Link>
            <Link className="hover:font-bold cursor-pointer" href='/dashboard'>Dashboard</Link>
            <Link className="hover:font-bold cursor-pointer" href='/singUp'>SignUp</Link>
            <Link className="hover:font-bold cursor-pointer" href='/singIn'>LogIn</Link>
          </div>
        </nav>
        {children}
        <footer className="flex flex-col gap-2 bg-black text-white py-5 rounded-t-xl">
          <div className="flex justify-center items-center gap-1">
            <h1 className="fa fa-copyright"></h1>
            <h1>Copyright 2026</h1>
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="fa fa-code"></h1>
            <h1>Masum Software Lad</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}

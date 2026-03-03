import SingUpClient from "../_clientComponents/singUp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sing Up",
    description: "Open a new Account, This Tudo List"
};

const SingUp = () => {
    return(
        <main className="h-screen px-10 py-15">
            <h1 className="text-center text-3xl font-bold text-blue-500">Sing Up</h1>
            <SingUpClient/>
        </main>
    )
}
export default SingUp;
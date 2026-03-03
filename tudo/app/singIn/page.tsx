import SingInClient from "../_clientComponents/singIn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In",
    description: "Log In now, This Tudo List Applicaiton!"
};

const SingIn = () => {
    return(
        <main className="h-screen px-10 py-15">
            <h1 className="text-center text-3xl font-bold text-blue-500">Log In</h1>
            <SingInClient/>
        </main>
    )
}
export default SingIn;
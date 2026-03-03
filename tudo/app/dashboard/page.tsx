import UserName from "@/app/_clientComponents/dashboard"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Visit Your Profile & Check Your List Items"
};

const Dashboard = () => {
    return(
        <main className="h-screen px-10 py-8">
            <UserName/>
        </main>
    )
}
export default Dashboard;
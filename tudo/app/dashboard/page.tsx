import UserName, { TudoAdd } from "../_clientComponents/dashboard";

const Dashboard = () => {
    return(
        <main className="h-screen px-10 py-8">
            <div className="flex flex-col bg-amber-700 px-5 py-5 gap-5 rounded-2xl">
                <UserName/>
                <TudoAdd/>
            </div>
            <hr className="mt-5"/>
            
        </main>
    )
}
export default Dashboard;
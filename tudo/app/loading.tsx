const Loading = () => {
    return(
        <main className="h-screen flex flex-col items-center py-30 gap-15">
            <h1 className="fa fa-spinner text-7xl animate-spin"></h1>
            <h1 className="text-5xl text-red-600">Loading...</h1>
        </main>
    )
}
export default Loading;
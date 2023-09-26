import LoginPanel from "./components/LoginPanel"

const LoginPage:React.FC = () => {
    return(
        <>
            <div className="flex h-screen">
                <div className="flex-col mx-auto my-auto space-y-10">
                    <h1 className="text-4xl text-center text-slate-700">G<b>AI</b>N</h1>
                    <LoginPanel/>
                    <div className="flex-grow space-x-5 mx-auto text-center text-slate-500">
                        <a href="/">Forgot Password</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
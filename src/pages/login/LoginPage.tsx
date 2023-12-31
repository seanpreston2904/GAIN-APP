import LoginPanel from "./components/LoginPanel"
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BounceLoader } from "react-spinners";

const LoginPage:React.FC = () => {

    //const [user, loading, error] = useAuthState(auth);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading){ return; }
        if(user){ navigate("/dashboard") }
    }, [user, loading])

    return(
        <>
            <div className="flex h-screen">
                {   loading ?
                    <div className="flex flex-col mx-auto my-auto space-y-4">
                        <BounceLoader color="#334155" size={32} className="mx-auto"/>
                        <h3 className="font-semibold text-xl text-slate-700 text-center">Logging in</h3>
                    </div>
                    :
                    <div className="flex-col mx-auto my-auto space-y-10">
                        <h1 className="text-4xl text-center text-slate-700">G<b>AI</b>N</h1>
                        <LoginPanel/>
                        <h6 className="text-center text-slate-400">Sean Preston 2023 - <a href="https://www.github.com/seanpreston2904" className=" hover:text-slate-600">Github</a></h6>
                    </div>
                }
            </div>
        </>
    )
}

export default LoginPage
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const AccountSettings:React.FC = () => {

    const navigate = useNavigate()

    return(
        <>
            <div className="flex flex-col px-6 pb-6 h-screen">
                <div className="flex p-4 space-x-6 z-10">
                    <h2 className="text-3xl text-slate-700 my-auto">G<b>AI</b>N</h2>

                    <div className="h-10 w-[1px] bg-slate-200"/>

                    <div className="flex flex-grow space-x-5">

                        <button className="flex my-auto space-x-2 text-slate-700">
                            <ArrowLeft className="my-auto text-xl"/>
                            <h3 className="text-slate-700 font-semibold text-lg" onClick={() => {navigate("/dashboard")}}>Back to Dashboard</h3>
                        </button>

                    </div>

                </div>
                
                <span className="block h-[1px] w-full bg-slate-200 z-0"></span>

                <div className="flex flex-col my-auto mx-auto text-slate-700 text-center space-y-2">
                <h1 className="text-2xl font-semibold">There's not much to change yet!</h1>
                <p>But there will be soon...</p>
            </div>

            </div>

            
        </>
    )

}

export default AccountSettings


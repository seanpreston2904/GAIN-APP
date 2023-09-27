import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { BoxArrowDownLeft, BoxArrowLeft, GearFill, HouseFill } from "react-bootstrap-icons";
import AccountModal from "./components/AccountModal";

const Dashboard:React.FC = () => {

    //const [user, loading, error] = useAuthState(auth);
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [showAccountModal, setShowAccountModal] = useState(false);
    const navigate = useNavigate();

    // Fetch the user name and photo URL
    const fetchUserData = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid))
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setPhotoUrl(data.photo)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if(loading) return;
        if(!user) return navigate("/");
        fetchUserData();
    }, [user, loading])

    return(
        <>
            <div className="flex flex-col px-6 h-screen">
                <div className="flex p-4 space-x-6 z-10">
                    <h2 className="text-3xl text-slate-700 my-auto">G<b>AI</b>N</h2>

                    <div className="h-10 w-[1px] bg-slate-200"></div>

                    <div className="flex flex-grow">

                        <button className="flex my-auto space-x-2 text-slate-700">
                            <HouseFill className="my-auto text-xl"/>
                            <h3 className="text-slate-700 font-semibold text-lg">Home</h3>
                        </button>

                    </div>

                    <div className="flex space-x-4">
                        <h3 className='my-auto text-lg text-slate-700 font-semibold'>{name.split(" ")[0]}</h3>

                        <button aria-hidden="true" type="button" onClick={() => {
                            if(showAccountModal){ setShowAccountModal(false); return; } 
                            setShowAccountModal(true)
                        }}>
                            <img className="rounded-full w-8 h-8 my-auto" src={photoUrl} alt="User Photo" />
                        </button>
                    </div>
                    

                    

                </div>
                
                <span className="block h-[1px] w-full bg-slate-200 z-0"></span>

                {
                        showAccountModal && <div className="w-64 rounded-md shadow-lg absolute right-10 top-16 z-10 bg-white" id="accountDropdown">
                            <div className="flex space-x-4 p-4">
                                <img src={photoUrl} className="1-14 h-14 rounded-full"/>
                                <h3 className="text-xl font-semibold text-slate-700 my-auto">{name}</h3>
                            </div>
                            <ul aria-labelledby="profilePhoto" className="z-10">
                                <li className='flex p-3 bg-white hover:bg-slate-100 rounded-t-md'>
                                    <button className="z-10 transition-colors flex space-x-2 text-slate-700 w-full">
                                        <GearFill className='my-auto'/>
                                        <h4>Account Settings</h4>
                                    </button>
                                </li>
                                <li className='flex p-3 bg-white hover:bg-slate-100 rounded-b-md'>
                                    <button className="z-10 transition-colors flex space-x-2 text-slate-700 w-full" onClick={logout}>
                                        <BoxArrowLeft className='my-auto'/>
                                        <h4>Log Out</h4>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }

            </div>
        </>
    )

}

export default Dashboard


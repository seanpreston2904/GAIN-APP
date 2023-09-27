import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Dashboard:React.FC = () => {

    //const [user, loading, error] = useAuthState(auth);
    const [user, loading] = useAuthState(auth);
    //const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const navigate = useNavigate();

    // Fetch the user name and photo URL
    const fetchUserData = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid))
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            //setName(data.name);
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
                <div className="flex p-4">
                    <h2 className="text-3xl text-slate-700 my-auto">G<b>AI</b>N</h2>

                    <div className="flex flex-grow">

                    </div>

                    <img className="rounded-full w-8 h-8 my-auto" src={photoUrl}/>

                </div>
                
                <span className="h-[1px] w-full bg-slate-200"></span>
            </div>
        </>
    )

}

export default Dashboard


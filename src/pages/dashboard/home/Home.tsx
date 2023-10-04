import { useNavigate } from "react-router-dom"

const Home:React.FC = () => {

    const navigate = useNavigate()

    return(
        <>
            <div className="flex flex-col my-auto mx-auto text-slate-700 text-center space-y-2">
                <h1 className="text-2xl font-semibold">It's pretty empty in here!</h1>
                <p>We're still working on a few things.</p>
                <div className="flex space-x-2">
                    <p className="my-auto">In the mean time, check out the </p>
                    <button 
                        className="px-2 py-1 rounded-md bg-slate-200 font-semibold hover:shadow-inner transition-shadow"
                        onClick={() => navigate("mealcreator")}
                    >
                        <p>Meal Builder</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
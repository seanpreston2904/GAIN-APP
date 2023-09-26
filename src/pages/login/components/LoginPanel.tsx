import { Google } from "react-bootstrap-icons"

const LoginPanel:React.FC = () => {
    return(
        <>
            <div className="rounded-md shadow-lg mx-auto p-4 text-slate-700">
                <button type='button' className="flex mx-auto py-2 px-4 h-16">
                    <div className='bg-slate-100 py-3 px-4 flex-grow flex items-center justify-center rounded-l-md'>
                        <p className="text-center mx-auto font-semibold">Sign In with Google Plus</p>
                    </div>
                    <div className="bg-slate-500 text-white text-xl h-full flex items-center px-4 rounded-r-md">
                        <Google />
                    </div>
                </button>
            </div>
        </>
    )
}

export default LoginPanel
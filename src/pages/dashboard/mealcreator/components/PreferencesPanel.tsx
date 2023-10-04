import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus} from "react-bootstrap-icons";
import PreferenceTag from "./components/PreferenceTag";

export interface PreferencesData {
    likes: String[];
    dislikes: String[];
}

const PreferencesPanel:React.FC<{onNext: Function, onBack: Function, data: PreferencesData}> = ({onNext, onBack, data}) => {

    const [currentLikes, setCurrentLikes] = useState<String[]>(data.likes)
    const [currentDislikes, setCurrentDislikes] = useState<String[]>(data.dislikes);

    const [likeInput, setLikeInput] = useState("")
    const [dislikeInput, setDislikeInput] = useState("")

    const handleLikesInput = (event: React.FormEvent<HTMLInputElement>) => { setLikeInput(event.currentTarget.value) }
    const handleDislikesInput = (event: React.FormEvent<HTMLInputElement>) => { setDislikeInput(event.currentTarget.value) }

    return(
        <>
            <div className="flex flex-col text-slate-700 space-y-8 shadow-md rounded-md p-6 w-[22rem]">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-semibold">Preferences</h1>
                    <p className="text-slate-500">Let us know what foods you like and don't like</p>
                </div>
                <div className="flex flex-col text-center space-y-3">
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">Included Ingredients</h3>
                        <div className="h-28 bg-slate-100 p-2 rounded-md text-left flex flex-wrap overflow-scroll overflow-x-hidden gap-2">
                            {currentLikes.map((like) => {
                                return <PreferenceTag color="bg-emerald-300" label={like} onDelete={() => { setCurrentLikes(currentLikes.filter((likeTag) => likeTag !== like)) }}/>
                            })}
                        </div>
                        <div className="flex space-x-2">
                            <input 
                                value={likeInput}
                                className="bg-slate-200 rounded-md hover:shadow-inner transition-shadow pl-2 flex flex-grow outline-none focus:shadow-inner"
                                onChange={handleLikesInput}
                            ></input>
                            <button 
                                className="bg-emerald-300 rounded-md hover:shadow-inner"
                                onClick={() => {
                                    setCurrentLikes([...currentLikes, likeInput])
                                    setLikeInput("")
                                }}
                            >
                                <Plus className="text-3xl mx-auto my-auto text-white"/>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">Excluded Ingredients</h3>
                        <div className="h-28 bg-slate-100 p-2 rounded-md text-left flex flex-wrap overflow-scroll overflow-x-hidden gap-2">
                            {currentDislikes.map((dislike) => {
                                return <PreferenceTag color="bg-red-300" label={dislike} onDelete={() => { setCurrentDislikes(currentDislikes.filter((dislikeTag) => dislikeTag !== dislike)) }}/>
                            })}
                        </div>
                        <div className="flex space-x-2">
                            <input 
                                value={dislikeInput}
                                className="bg-slate-200 rounded-md hover:shadow-inner transition-shadow pl-2 flex flex-grow outline-none focus:shadow-inner"
                                onChange={handleDislikesInput}
                            ></input>
                            <button 
                                className="bg-red-300 rounded-md hover:shadow-inner"
                                onClick={() => {
                                    setCurrentDislikes([...currentDislikes, dislikeInput])
                                    setDislikeInput("")
                                }}
                            >
                                <Plus className="text-3xl mx-auto my-auto text-white"/>
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="flex">
                            <div className="flex mx-auto space-x-3">
                                <button 
                                    className="mx-auto py-2 px-4 font-semibold flex space-x-2 transition-colors"
                                    onClick={() => onBack({
                                        likes: currentLikes,
                                        dislikes: currentDislikes
                                    })}
                                ><ArrowLeft className="my-auto"/><p>Back</p></button>
                                <button 
                                    disabled={true}
                                    className="mx-auto py-2 px-4 font-semibold flex space-x-2 disabled:text-slate-300  transition-colors"
                                    onClick={() => onNext()}
                                ><p>Next</p><ArrowRight className="my-auto"/></button>
                            </div>
                            
                        </div>

            </div>
        </>
    )
}

export default PreferencesPanel
import { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

export interface TargetsData {
    longTermGoal: String;
    shortTermGoal: String;
}

const TargetsPanel:React.FC<{onNext: Function, data: TargetsData}> = ({onNext, data}) => {

    const shortTermGoals = ["Filling", "Light"]
    const [currentShortTermGoal, setCurrentShortTermGoal] = useState(data.shortTermGoal)

    const longTermGoals = ["Weight Loss", "Weight Gain"]
    const [currentLongTermGoal, setCurrentLongTermGoal] = useState(data.longTermGoal);

    return(
        <>
            <div className="flex flex-col text-slate-700 space-y-8 shadow-md rounded-md p-6 w-[22rem]">
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-2xl font-semibold">Targets</h1>
                            <p className="text-slate-500">Pick some short term and long term goals to tailor your meal to your needs.</p>
                        </div>
                        <div className="flex flex-col text-center space-y-3">
                            <h3 className="font-semibold">Long Term</h3>
                            <div className="flex space-x-2 mx-auto">
                                {
                                    longTermGoals.map(
                                        (goal) => {
                                            return(
                                                <button 
                                                    className={`px-4 py-3 rounded-md w-36 font-semibold hover:shadow-inner transition-shadow ${currentLongTermGoal === goal ? "bg-emerald-200" : "bg-slate-200"}`}
                                                    onClick={() => {setCurrentLongTermGoal(goal)}}
                                                >{goal}</button>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>

                        <div className="flex flex-col text-center space-y-3">
                            <h3 className="font-semibold">Short Term</h3>
                            <div className="flex space-x-2 mx-auto">
                            {
                                    shortTermGoals.map(
                                        (goal) => {
                                            return(
                                                <button 
                                                    className={`px-4 py-3 rounded-md w-36 font-semibold hover:shadow-inner transition-shadow ${currentShortTermGoal === goal ? "bg-emerald-200" : "bg-slate-200"}`}
                                                    onClick={() => {setCurrentShortTermGoal(goal)}}
                                                >{goal}</button>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <button 
                                disabled={(currentLongTermGoal === "" || currentShortTermGoal === "")} 
                                className="mx-auto py-2 px-4 font-semibold flex space-x-2 disabled:text-slate-300 transition-colors"
                                onClick={() => onNext({
                                    longTermGoal: currentLongTermGoal,
                                    shortTermGoal: currentShortTermGoal
                                })}
                            ><p>Next</p><ArrowRight className="my-auto"/></button>
                        </div>
                    </div>
        </>
    )
}

export default TargetsPanel
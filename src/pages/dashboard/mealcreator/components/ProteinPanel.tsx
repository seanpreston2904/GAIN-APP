import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

export interface ProteinData {
    proteins: String[];
}

const ProteinPanel:React.FC<{onNext: Function, onBack: Function, data: ProteinData}> = ({onNext, onBack, data}) => {

    console.log(data)

    const proteins = ["Beef", "Pork", "Chicken", "Lamb"]
    const [currentProteins, setCurrentProteins] = useState<String[]>([...data.proteins])

    return(
        <>
            <div className="flex flex-col text-slate-700 space-y-8 shadow-md rounded-md p-6 w-[22rem]">
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-2xl font-semibold">Proteins</h1>
                            <p className="text-slate-500">Select a few of your favourite sources of protein.</p>
                        </div>
                        <div className="flex flex-col text-center space-y-3">
                            <div className="flex flex-col space-y-2 mx-auto">
                                {
                                    proteins.map(
                                        (protein) => {
                                            return(
                                                <button 
                                                    className={`px-4 py-3 rounded-md w-36 font-semibold hover:shadow-inner transition-shadow ${currentProteins.includes(protein) ? "bg-emerald-200" : "bg-slate-200"}`}
                                                    onClick={() => {
                                                        const newProteins = (!currentProteins.includes(protein)) ? [...currentProteins, protein] : currentProteins.filter((curr) => curr !== protein)

                                                        console.log(newProteins)

                                                        setCurrentProteins([...newProteins])
                                                    }}
                                                >{protein}</button>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex mx-auto space-x-3">
                                <button 
                                    className="mx-auto py-2 px-4 font-semibold flex space-x-2 transition-colors"
                                    onClick={() => onBack({
                                        proteins: [...currentProteins]
                                    })}
                                ><ArrowLeft className="my-auto"/><p>Back</p></button>
                                <button 
                                    disabled={(currentProteins.length < 1)} 
                                    className="mx-auto py-2 px-4 font-semibold flex space-x-2 disabled:text-slate-300  transition-colors"
                                    onClick={() => onNext({
                                        proteins: [...currentProteins]
                                    })}
                                ><p>Next</p><ArrowRight className="my-auto"/></button>
                            </div>
                            
                        </div>
                    </div>
        </>
    )
}

export default ProteinPanel
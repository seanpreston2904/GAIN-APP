import { useEffect, useState } from "react"
import { ArrowRight } from "react-bootstrap-icons"
import TargetsPanel, { TargetsData } from "./components/TargetsPanel";
import ProteinPanel, { ProteinData } from "./components/ProteinPanel";

const MealCreator:React.FC = () => {

    const [currentPanel, setCurrentPanel] = useState(0);

    const [shortTermGoal, setShortTermGoal] = useState<String>("");
    const [longTermGoal, setLongTermGoal] = useState<String>("");

    const [protein, setProtein] = useState<String[]>([]);

    const panels = [
        <TargetsPanel 
            onNext={(data: TargetsData) => {
                setShortTermGoal(data.shortTermGoal);
                setLongTermGoal(data.longTermGoal);
                setCurrentPanel(1);
            }}
            data={
                {
                    longTermGoal: longTermGoal,
                    shortTermGoal: shortTermGoal
                }
            }
        />,
        <ProteinPanel 
            onNext={(data: ProteinData) => {
                setProtein([...data.proteins]);
                setCurrentPanel(2);
            }}
            onBack={(data: ProteinData) => {
                setProtein([...data.proteins]);
                setCurrentPanel(0);
            }}
            data={
                {
                    proteins: protein
                }
            }
        />
    ]

    return(
        <>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-col my-auto">

                    <div className="flex flex-col mx-auto space-y-4">
                        <div className="flex space-x-4 py-4 mx-auto">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full my-auto" />
                                <h3 className="text-lg font-semibold text-slate-700">Targets</h3>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-slate-300 rounded-full my-auto" />
                                <h3 className="text-lg font-semibold text-slate-300">Protein</h3>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-slate-300 rounded-full my-auto" />
                                <h3 className="text-lg font-semibold text-slate-300">Preferences</h3>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="flex mx-auto">

                        {panels[currentPanel]}
                        
                    </div>

                </div>
                
                
                
            </div>
        </>
    )
}

export default MealCreator
import { useState } from "react"
import TargetsPanel, { TargetsData } from "./components/TargetsPanel";
import ProteinPanel, { ProteinData } from "./components/ProteinPanel";
import PreferencesPanel, { PreferencesData } from "./components/PreferencesPanel";

const MealCreator:React.FC = () => {

    const [currentPanel, setCurrentPanel] = useState(0);

    const [shortTermGoal, setShortTermGoal] = useState<String>("");
    const [longTermGoal, setLongTermGoal] = useState<String>("");

    const [protein, setProtein] = useState<String[]>([]);

    const [likes, setLikes] = useState<String[]>([]);
    const [dislikes, setDislikes] = useState<String[]>([]);


    const navProgressMarks = ["Targets", "Protein", "Preferences"]

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
                    proteins: [...protein]
                }
            }
        />,
        <PreferencesPanel
            onNext={(data: PreferencesData) => {
                setLikes([...data.likes]);
            }}
            onBack={(data: PreferencesData) => {
                setDislikes([...data.dislikes]);
                setCurrentPanel(1);
            }}
            data={
                {
                    likes: [...likes],
                    dislikes: [...dislikes]
                }
            }
        />
    ]

    return(
        <>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-col my-auto space-y-7">

                    <div className="flex flex-col mx-auto space-y-4">
                        <div className="flex space-x-4 mx-auto">
                            {/* <div className="flex space-x-2">
                                <div className={`w-3 h-3 bg-emerald-500 rounded-full my-auto`} />
                                <h3 className="text-lg font-semibold text-slate-700">Targets</h3>
                            </div>
                            <div className="flex space-x-2">
                                <div className={`w-3 h-3 bg-slate-300 rounded-full my-auto`} />
                                <h3 className="text-lg font-semibold text-slate-300">Protein</h3>
                            </div>
                            <div className="flex space-x-2">
                                <div className={`w-3 h-3 bg-slate-300 rounded-full my-auto`} />
                                <h3 className="text-lg font-semibold text-slate-300">Preferences</h3>
                            </div> */}
                            {
                                navProgressMarks.map(
                                    (label) => {

                                        var dotColor = (navProgressMarks.indexOf(label) === currentPanel) ? "bg-emerald-500" : 
                                            (navProgressMarks.indexOf(label) < currentPanel) ? "bg-slate-700" : "bg-slate-300"

                                        var labelColor = (navProgressMarks.indexOf(label) === currentPanel) ? "text-emerald-500" : 
                                            (navProgressMarks.indexOf(label) < currentPanel) ? "text-slate-700" : "text-slate-300"

                                        return(
                                            <div className="flex space-x-2" key={label}>
                                                <div key={label} className={`w-3 h-3 ${dotColor} rounded-full my-auto`} />
                                                <h3 key={label} className={`text-lg font-semibold ${labelColor}`}>{label}</h3>
                                            </div>
                                        )
                                    }
                                )
                                
                            }
                        </div>
                        
                    </div>

                    <span className="block h-[1px] w-96 mx-auto bg-slate-200 z-0"></span>
                    
                    <div className="flex mx-auto">

                        {panels[currentPanel]}
                        
                    </div>

                </div>
                
                
                
            </div>
        </>
    )
}

export default MealCreator
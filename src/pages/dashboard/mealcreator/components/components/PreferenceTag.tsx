import { X } from "react-bootstrap-icons"

const PreferenceTag: React.FC<{color: String, label: String, onDelete: Function}> = ({color, label, onDelete}) => {

    return(

        <button 
            className={`self-start flex px-2 py-1 ${color} space-x-1 h-10 rounded-md text-white font-semibold hover:shadow-inner`}
            onClick={() => {onDelete()}}
        >
            <p className="my-auto">{label}</p>
            <X className={`text-xl my-auto text-white`}/>
        </button>

    )

}

export default PreferenceTag
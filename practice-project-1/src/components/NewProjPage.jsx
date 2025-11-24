import { useRef} from "react";
import Input from "./Input";

export default function NewProjPage({onSubmit}) {
    const name = useRef();
    const desc = useRef();
    const date = useRef();

    let currInput = {};

    function handleSubmit(e) {
        
        e.preventDefault(); 

        if (name.current.value != '' && desc.current.value != '' && date.current.value!= '' ) 
        {
            currInput = {
                'name' : name.current.value,
                'desc' : desc.current.value,
                'date' : date.current.value
            };
            onSubmit('save', currInput);
        }
        else
        {
            alert("Please fill the inputs first!!!");
        }
    }

    return (
        <div className="w-2/3 mt-16">
            <form className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950" onClick={()=>onSubmit('cancel',null)}>Cancel</button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={(e) => handleSubmit(e)}>Save</button>
            </form>
            
            <Input label="Title" inputType="text" ref={name}/>
            <Input label="Description" inputType="textarea" ref={desc}/>
            <Input label="Due Date" inputType="date" ref={date}/>
        </div>
    );
}
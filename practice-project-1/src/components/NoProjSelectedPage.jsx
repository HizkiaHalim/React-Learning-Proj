import img from '../assets/no-projects.png';

export default function NoProjSelectedPage({onClickHandle}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={img} />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <button className="bg-stone-700 text-stone-500 font-medium p-3 rounded-md hover:bg-stone-600 hover:text-stone-100" onClick={()=>onClickHandle('ANP')}>Create New Project</button>
        </div>
    );
}
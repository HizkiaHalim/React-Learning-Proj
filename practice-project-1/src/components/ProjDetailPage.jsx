export default function ProjDetailPage({projDetail, onDeleteProj, currTaskList, onAddTask, refTaskInput}){
console.log(projDetail)
    return(
        <div className="w-2/3 mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{projDetail.name}</h1>
                        <p className="mb-4 text-stone-400">{projDetail.date}</p>
                        <p className="text-stone-600 whitespace-pre-wrap">{projDetail.desc}</p>
                    </div>
                    <div>
                        <button className="text-stone-600 hover:text-stone-950" onClick={()=>onDeleteProj(projDetail.name)}>Delete</button>
                    </div>
                </div>
            </header>
            <div>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <div className="flex items-center gap-4">
                    <input ref={refTaskInput} type='text' className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                    <button className="text-stone-700 hover:text-stone-950" onClick={()=> onAddTask(projDetail.name) }>Add Task</button>
                </div>
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {currTaskList[projDetail.name] 
                        ? currTaskList[projDetail.name].map((item) => (
                        <li className="flex justify-between my-4" key={item}>
                            {item}
                            <button className="text-stone-700 hover:text-red-500">Delete</button>
                        </li>
                        ))
                        : <li className="flex justify-between my-4"></li>
                    }
                </ul>
            </div>
        </div>
    );
}
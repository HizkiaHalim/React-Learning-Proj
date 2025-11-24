export default function Navbar({dataList, onClickHandle, currSelected}) {
    return (
        <aside className="bg-stone-900 rounded-r-xl w-1/3 px-8 py-16 text-stone-50 md:w-72">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2 >
            <button className="bg-stone-700 text-stone-500 font-medium p-3 rounded-md hover:bg-stone-600 hover:text-stone-100" onClick={()=>onClickHandle('ANP')}> + Add Project</button>
            <ul className="mt-8">
                {
                    dataList.map((item)=>(
                        <li className="flex justify-between my-4" key={item.name}>
                            <button className={currSelected != item.name ? "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-500 hover:text-stone-200 hover:bg-stone-800" : "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-800"} onClick={()=>onClickHandle(item.name)}>{item.name}</button>
                        </li> 
                    ))
                }
            </ul>
        </aside>
    );
}
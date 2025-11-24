import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import NewProjPage from "./components/NewProjPage";
import ProjDetailPage from "./components/ProjDetailPage";
import NoProjSelectedPage from "./components/NoProjSelectedPage";

function App() {
  const [currSelected, setCurrSelected] = useState(null);
  const [currTaskList, setCurrTaskList] = useState({});

  const projectList = useRef([]);
  const refTaskInput = useRef();

  function onNavbarClick(selectedButton) {
    if (currSelected != selectedButton) {
      setCurrSelected(selectedButton);
      refTaskInput.current.value = '';
    }
  }

  function onAddProj(selectedButton, inputData) {
    if (selectedButton == 'save') {
      projectList.current.push(inputData);
    }
    setCurrSelected(null);
  }

  function onDeleteProj(deleteProjName) {
    const deleteIndex = projectList.current.findIndex((item) => item.name == deleteProjName);
    const newList = [...projectList.current];
    newList.splice(deleteIndex, 1);
    projectList.current = newList;

    setCurrSelected(null);
  }
  
  function onAddTask(name) {
    let list;

    console.log(refTaskInput.current.value);
    if (currTaskList[name]) {
      list = currTaskList[name];
      list.push(refTaskInput.current.value)
    }
    else {
      list = [refTaskInput.current.value];
    }

    setCurrTaskList( taskList => {
        return {
            ...taskList,
            [name]: list
        }
    });

    refTaskInput.current.value = '';
  }

  return (
    <main className="h-screen flex gap-8">
      <Navbar dataList={projectList.current} onClickHandle={onNavbarClick} currSelected={currSelected}/>
      {
        currSelected == 'ANP' 
        ? <NewProjPage onSubmit={onAddProj}/> 
        : currSelected 
          ? <ProjDetailPage projDetail={projectList.current.find((item) => item.name == currSelected)} onDeleteProj={onDeleteProj} currTaskList={currTaskList} onAddTask={onAddTask} refTaskInput={refTaskInput}/>
          : <NoProjSelectedPage onClickHandle={onNavbarClick}/>
      }
    </main>
  );
}

export default App;

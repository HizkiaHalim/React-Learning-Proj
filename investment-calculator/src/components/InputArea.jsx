import Input from "./Input";

export default function InputArea({onDataChange, investmentData}){

    function handleDataChange(index, value) {
        onDataChange(index, value);
    }

    return(
        <div id="user-input">
            <div className="input-group" >
                <Input data={investmentData} param={'Initial Investment'} inputNewValue={handleDataChange}/>
                <Input data={investmentData} param={'Annual Investment'} inputNewValue={handleDataChange}/>
            </div>
            <div className="input-group" >
                <Input data={investmentData} param={'Expected Result'} inputNewValue={handleDataChange}/>
                <Input data={investmentData} param={'Duration'} inputNewValue={handleDataChange}/>
            </div>
        </div>
    );
}
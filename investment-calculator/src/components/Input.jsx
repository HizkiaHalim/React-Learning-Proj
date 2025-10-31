export default function Input({data, param, inputNewValue}){

    function handlenewValue(event) {
        inputNewValue(param, event.target.value);
    }

    return(
        <div>
            <label>{param}</label>
            <input type="number" required value={data[param]} onChange={handlenewValue}/>
        </div>
    );
}
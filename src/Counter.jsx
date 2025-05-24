import "./Counter.css";
import { useState } from "react";

function HelloCounter(){
    const [Counter, setCount] = useState(0)
    const Add = () => {
        setCount(Counter+1)
    }
    const Substract = () => {
        setCount(Counter-1)
    }
    return(
        <div class="Counter">
            <div> <h2>Счётчик:</h2> <h1>{Counter}</h1>
                <button class="minus" onClick={Substract}>- Минус</button>
                <button class="plus" onClick={Add}>+ Плюс</button>
            </div>
        </div>
    );
}   

export default HelloCounter;
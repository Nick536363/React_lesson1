import "./Counter.css";

function helloCounter(){
    return(
        <div class="Counter">
            <div> <h2>Счётчик:</h2> <h1>0</h1>
                <button class="minus">- Минус</button>
                <button class="plus">+ Плюс</button>
            </div>
        </div>
    );
}   

export default helloCounter;
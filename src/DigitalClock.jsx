import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []); 

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const secondes = time.getSeconds();

        return `${zero(hours)}:${zero(minutes)}:${zero(secondes)}`;
    }

    function zero(number){
        return (number < 10 ? "0" : "") + number
    }

    return(
              <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
              </div>
        );
}


export default DigitalClock
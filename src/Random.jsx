import { useState } from "react";
import './Random.css'

    let students = ["Abdallah", "Nohlan", "Soen", "Ethan", "Mathis", "Tony"]

function Random() {
    const [randomStudent, setRandomStudent] = useState("") ;
    const [list, setList] = useState([... students]) ;

    function generateRandom() {
        let newRandomStudent = list[Math.floor(Math.random() * list.length)];
        setRandomStudent(newRandomStudent);
        setList(list.filter(student => student != newRandomStudent));
    }

    function reset() {
        setList([...students]);
        setRandomStudent("");
    }

    return ( 
        <>


            <h1>Random</h1>
            {
                (list.length) ? <button onClick={() => generateRandom()}>spin the wheel</button> 

                : <button onClick={() => reset()}>reset</button>
            }
            <p> pas de chance:{randomStudent}, tu a été sélectionner. joyeux hungergames et puisse le sort vous être favorable</p>
        </>
     );
}

export default Random;
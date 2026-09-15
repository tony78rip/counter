//notre premier composant fonctionnel qui est compteur basique

//1-Imports
import { useState } from "react";

//2-composant ou fonction de composant fonctionnel

function Counter() {
    //1-donnée (state, variable, ...)
    const [count, setCount] = useState(0);

    //2- operations (différentes fonctions lié au composant)


    //3- vue du composant en jsx le rendue la vue.
    return ( 

        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click on me</button> 
            <button onClick={() => setCount(0)}>Reset</button>
            <h2>tu sera pas decu</h2>
        </>

     );
}

//3-export du composant
export default Counter;
import {useState, useEffect} from 'react';

function Api() {

    const [press, setPress] = useState(false)

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [press])

    return ( 
        <>
            <h1>Page d'API !</h1>
            <button onClick={() => setPress(!press)}>Cliquez-moi</button>
        </>
     );
}

export default Api;

import {useState} from 'react';

//faire un login /signup
//email, username, password
//refactoiser

function Form() {

    const [fromData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })

    const resetForm = () => {
        setFormData=({
            username: "",
            email: "",
            password: "",
            confirm: ""
        })
    }

    let inputTypes = ["username", "email", "password", "confirm"]

    let copy = [...inputTypes]

    const handleSubmit = () => {
        if (fromData.password !== fromData.confirm) {
            alert("Les mots de passe ne correspondent pas !")
            return
        }
        console.log(fromData)
    }
    
    return ( 
        
        <>
            <h1>form en react</h1>

            {inputTypes.map((type) => (
                <input
                    key={type}
                    type={ type === "confirm" || type === "password" ? "password" : "text"}
                    name={type}
                    value={fromData[type]}
                    placeholder={"ici le " + type}
                    onChange={(e) => setFormData({ ... fromData, [type]: e.target.value})}
                />
            ))}

            <button onClick={() => handleSubmit()}>submit</button>

            <button type="button" onClick={resetForm}>
                Réinitialiser les champs
            </button>
        </>
     );
}

export default Form;
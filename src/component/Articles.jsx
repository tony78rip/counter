import { useEffect } from "react"
import data from "../data/data.json"

function Articles(){

    useEffect(() => {
            console.log(data)
        }, 
    [])


    return ( 
        <>
            <h1>Articles</h1>
            {data.map((article, index) => (
                <div key={index}>
                    <h2>{article.titre}</h2>
                    <p>{article.date}</p>
                    <p>{article.auteur}</p>
                    <p>{article.contenu}</p>
                </div>
            ))}
        </>
     );
}

export default Articles;
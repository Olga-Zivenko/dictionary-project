import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
console.log(props.meaning);
    return (
        <div className="Meaning">
        <h3>
            {props.meaning.partOfSpeech}
        </h3>  
        <Synonyms synonyms={props.meaning.synonyms} />
        {props.meaning.definitions.map(function(definition, index){
            if (definition.example){
            return(
                <div key={index}>
                    <p>
                    <strong>Definition: </strong>{definition.definition}
                    <br />
                    <strong>Example: </strong>
                    <em>{definition.example}</em>
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                     </p>
                    </div>
            )}
            else {return(
                <div key={index}>
                    <p>
                    <strong>Definition: </strong>{definition.definition}
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                     </p>
                    </div>)

            }
        })}
                </div>  )
}
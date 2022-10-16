import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

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
                    <div className="definition">
                    {definition.definition}
                    </div>
                    <div className="example">
                    {definition.example}</div>
                    
                    <Synonyms synonyms={definition.synonyms} />
                     
                    </div>
            )}
            else {return(
                <div key={index}>
                    <div className="definition">
                    {definition.definition}
                    </div>
                    <Synonyms synonyms={definition.synonyms} />
                    
                    </div>)

            }
        })}
                </div>  )
}
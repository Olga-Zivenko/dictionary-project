import React, {useState} from "react";
import axios from "axios";
import  "./Dictionary.css";
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLouded]= useState(false);
    
    function handleResponse(response) {
         console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
        }
    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    
        function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLouded(true);
        search();
    }

if(loaded){
    return (
        <div className="Dictionary">
    <section>
        <h1>
            What word do you want to look up?
        </h1>
    <form onSubmit={handleSubmit}>
        <input type="search" autoFokus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
    </form>
    <div className="hint">
        suggested words: sunset, wine, yoga..
    </div>
    </section>
    <Results results={results} />
    
        </div>);

} else{
    load();
    return "Loading";

}
    
}
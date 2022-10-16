import React, {useState} from "react";
import axios from "axios";
import  "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLouded]= useState(false);
    let[photos, setPhotos]=useState(null);

    function handleDictionaryResponse(response) {
         console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
        }
        function handlePexelsResponse(response) {
            setPhotos(response.data.photos);
           }


    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey="563492ad6f917000010000017d72ff73ce0a47859d12ef13fcbc1f47";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, {headers: {"Authorization": `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);

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
        <input type="search" autofokus="true" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
    </form>
    <div className="hint">
        suggested words: sunset, wine, yoga..
    </div>
    </section>
    <Results results={results} />
    <Photos photos={photos} />
        </div>);

} else{
    load();
    return "Loading";

}
    
}
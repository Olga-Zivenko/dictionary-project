import React, {useState} from "react";
import axios from "axios";
import  "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function handleResponse(response) {
        console.log(response);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
        let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/hello";
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
    <div className="dictionary">
<form onSubmit={search}>
    <input type="search" autoFokus={true} onChange={handleKeywordChange} />
</form>


    </div>);
}
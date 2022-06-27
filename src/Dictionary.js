import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios(apiUrl).then(handleResponse).catch(function (error) {
            return alert("Sorry, we cannot find this word in our database..😥");
        })
    }
    function handleResponse(response) {
        setResults(response.data[0]);
        
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form className="search-form mb-5" onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
                <button className="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <Results results={results} />
        </div>);
}
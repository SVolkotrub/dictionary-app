import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./results/Results";

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
            <section>
                <form className="m-2" onSubmit={search}>
                    <input type="search" className="p-1" autoFocus={true} placeholder="Type a word..." onChange={handleKeywordChange} />
                    <button className="submit border border-secondary ms-2 px-2 py-1 rounded"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </section>
            <Results results={results} />
        </div>);
}
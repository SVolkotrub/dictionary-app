import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";


export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios(apiUrl).then(handleResponse).catch(function (error) {
            return "Sorry, we cannot find this word in our database..😥";
        })
    }
    function handleResponse(response) {
        console.log(response.data[0]);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
        </div>);
}
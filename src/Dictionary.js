import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./results/Results";
import Photos from "./photo/Photos";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function search(event) {
        event.preventDefault();
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse).catch(function (error) {
            return alert("Sorry, we cannot find this word in our database..😥");
        });
        //documentation: https://www.pexels.com/api/documentation/?
        const pexelCode = "563492ad6f9170000100000126dda2aeba564ac39570bb1b7c4c5334";
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { "Authorization": `Bearer ${pexelCode}` };
        axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse).catch(function (error) {
            return alert("Sorry, we cannot find images with the word you are looking for in our database..😥");
        });
    }
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        
    }

    function handlePexelResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
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
            <Photos results={results} photos={photos} />
        </div>);
    
}
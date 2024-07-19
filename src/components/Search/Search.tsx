import React, {useState} from 'react';
import {AppDispatch} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {FetchShows} from "../../store/slice";
import Spinner from "../Spiner/Spinner";
import {Link} from "react-router-dom";
import "./Search.css"

const Search = () => {
    const [inputText,setInputText] = useState('');
    const dispatch:AppDispatch = useDispatch();
    const loading = useSelector((state) => state.show.loading);
    const shows = useSelector((state) => state.show.shows);

    const changeInput = ( event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
        if(event.target.value.length > 2){
            dispatch(FetchShows(inputText))
        }
    }
    return (
        <>
            <div className="container-fluid block-search">
                <div className="mt-5">
                    <form>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                            <input type="text"
                                   className="form-control"
                                   aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-sm"
                                   value={inputText}
                                   onChange={changeInput}
                            />
                        </div>
                    </form>
                    <div className="row">
                        <div className="mt-3">
                            {loading ? <Spinner/> : (
                                <div className="autocomplete">
                                    {shows.map((show, index) => (
                                        <Link to={`/shows/${show.show.id}`} className="m-2"
                                              key={show.id}>{`${index}.`} {show.show.name}</Link>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Search;
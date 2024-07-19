import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import {FetchShows} from "../../store/slice";
import Spinner from "../../components/Spiner/Spinner";
import "./Home.css"
import {Link} from "react-router-dom";

const Home = () => {
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
        <div className="container-fluid mb-5">
            <h2 className="text-center mt-5">you can find different movie here.</h2>
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
                                { shows.map((show) => (
                                    <Link to={`/shows/${show.show.id}`} className="m-2" key={show.id}>it is a {show.show.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import {FetchOneShow} from "../../store/slice";
import Spinner from "../Spiner/Spinner";
import Search from "../Search/Search";

const InfoMovie = () => {
    const {id} = useParams();
    const show = useSelector((state) => state.show.show);
    const dispatch:AppDispatch = useDispatch();
    const loading = useSelector((state) => state.show.loading);
    const img = show.image?.medium;


    useEffect(() => {
        if (id) {
            dispatch(FetchOneShow(id));
        }
    }, [dispatch,id]);




    return (
        <div className="container-fluid">
            <div>
                <Search/>
            </div>
            {loading ? <Spinner/> : (
                <div className="cart mb-3">
                    <div className="text-center mt-1">
                        <img src={img} alt="#"/>
                    </div>
                    <div className="card-body">
                        <p className="card-title text-center">{show.name}</p>
                        <p className="card-text">Status: {show.status}</p>
                        <p className="card-text">Summary: {show.summary}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoMovie;
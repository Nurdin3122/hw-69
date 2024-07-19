import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import {FetchOneShow} from "../../store/slice";
import Spinner from "../Spiner/Spinner";

const InfoMovie = () => {
    const {id} = useParams();
    const show = useSelector((state) => state.show.show);
    const dispatch:AppDispatch = useDispatch();
    const loading = useSelector((state) => state.show.loading);


    useEffect(() => {
        if (id) {
            dispatch(FetchOneShow(id));
        }
    }, [dispatch,id]);




    return (
        <div className="container-fluid">
            <p className="text-center mt-5">Your id is {id}</p>
            {loading ? <Spinner/> : (

                <div className="card">
                    <div className="text-center mt-1">
                        <img src={`${show.image.medium}`} alt="#"/>
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
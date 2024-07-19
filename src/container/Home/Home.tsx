import React from 'react';
import "./Home.css"

import Search from "../../components/Search/Search";

const Home = () => {

    return (
        <>
            <h1 className="text-center mt-5">you can find different movies here</h1>
            <Search/>
        </>


    );
};

export default Home;
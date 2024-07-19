import React from 'react';
import Header from "../../container/Header/Header";
import Footer from "../../container/Footer/Footer";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <header>
                    <Header/>
                </header>
                <main className="container-fluid flex-grow-1">
                    {children}
                </main>
                <footer className="mt-auto">
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default Layout;
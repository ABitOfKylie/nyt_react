import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Results from "../components/Results";
import Footer from "../components/Footer";

class Home extends Component{


    render(){
        return (
            <div>
                <Navbar />
                <Header />
                <Results />
                <Footer />

                <h1>This is a header from container:home.js with Results?</h1>
            </div>
        )
    }

};

export default Home;
import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Results from "../components/Results";
import Saved from "../components/Saved";
import Footer from "../components/Footer";

class Home extends Component{


    render(){
        return (
            <div>
                <Header />
                <Navbar />
                <Results />
                <Saved />
                <Footer />
            </div>
        )
    }

};

export default Home;
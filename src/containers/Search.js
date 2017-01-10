import React, {Component} from "react";
import Navbar from '../components/Navbar';
import axios from 'axios';

class Search extends Component {
    constructor (props){
        super(props);
        this.state = {
            search: ""
        }

    }
    handleSubmit(e){
        e.preventDefault();
        this.getThatShit(this.state.search);


        this.setState({search:""})
    }
    handleChange(e){
        e.preventDefault();
        this.setState({search: e.target.value});

    }

    getThatShit(giphy){
        const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`;
        console.log(url);
        axios.get(url)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <Navbar
                    handleChange={this.handleChange.bind(this)}
                    search={this.state.search}
                    handleSubmit={this.handleSubmit.bind(this)}
                    show={true} />
            </div>
        )
    }
}
export default Search
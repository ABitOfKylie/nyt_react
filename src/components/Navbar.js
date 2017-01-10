import React from 'react';
import { Link } from "react-router"


const Navbar = props => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4-offset-6">
                    <h2 className="searchTitle">Article Search</h2>
                        <div id="custom-search-input">
                            <div className="input-group col-md-4-offset-6">
                                <form onSubmit={props.handleSubmit} >
                                    {props.show ? <input onChange={props.handleChange} placeholder="belongs to Navbar.js" value={props.search}/> : null}
                                                                    </form>
                                <div>{props.search}</div>
                                <span className="input-group-btn">
                                        <button className= "btn btn-info btn-lg" type="button" id="searchBtn">
                                            <i className="pull-right clickable" className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </span>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;

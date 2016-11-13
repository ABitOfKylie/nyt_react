import React from 'react';
import { Link } from "react-router"


const Results=props => (
<div>
	<div className="container">
		<div className = "col-lg-10">
		<div className = "row">
			<div className="well">
				<div className="panel panel-success">
					<div className="panel-heading">
						<h3> This is the new panel heading for Results Panel 1</h3>
						<span className= "pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
				{/*<input type="text" className="form-control" onChange={props.handleChange} placeholder="In my dreams, this will be the start of the Results section - see results.js" value={props.search}/> */}
					</div>
					<div className="panel-body"><span>Panel content {props.search} in </span></div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>


)
export default Results
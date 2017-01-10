import React from 'react';
import { Link } from "react-router"


const Results=props => (
<div>
	<div className="container">
		<div className="col-lg-10">
		<div className="row">
			<div className="well">
				<div className="panel">
					<div className="panel-heading">
						<h3> This is the new panel heading for Results Panel 1</h3>
						<span className="pull-right clickable" id="pHeader"><i className="glyphicon glyphicon-chevron-up"></i></span>
				{/*<input type="text" className="form-control" onChange={props.handleChange} placeholder="In my dreams, this will be the start of the Results section - see results.js" value={props.search}/> */}
					</div>
					<div className="panel-body" id="article1"><span>Panel content {props.search} in body 1</span>
						<form onSubmit={props.handleSubmit}>
							<input className="resultInput"onChange={props.handleChange} placeholder="article1 result from search" value={props.search}/>
							<button>submit</button>
						</form>
						<div>{props.search}</div>
					</div>
					<div className="panel-body" id="article2"><span>Panel content {props.search} in body 2</span>
						<form onSubmit={props.handleSubmit}>
							<input className="resultInput"onChange={props.handleChange} placeholder="article 2 result from search" value={props.search}/>
							<button>submit</button>
						</form>
						<div>{props.search}</div>
					</div>
					<div className="panel-body" id="article3"><span>Panel content {props.search} in body 3</span>
							<form onSubmit={props.handleSubmit}>
							<input className="resultInput"onChange={props.handleChange} placeholder="article3 result from search" value={props.search}/>
							<button>submit</button>
						</form>
					</div>
					<div className="panel-body" id="article4"><span>Panel content {props.search} in body 4</span>
						<form onSubmit={props.handleSubmit}>
							<input className="resultInput"onChange={props.handleChange} placeholder="article1 result from search" value={props.search}/>
							<button>submit</button>
						</form>
					</div>
					<div className="panel-body" id="article5"><span>Panel content {props.search} in body 5</span>
						<form onSubmit={props.handleSubmit}>
							<input className="resultInput"onChange={props.handleChange} placeholder="article1 result from search" value={props.search}/>
							<button>submit</button>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
</div>


)
export default Results
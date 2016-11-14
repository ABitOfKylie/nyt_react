import React from 'react';


const Giphy = props => (
	<div>
		<form onSubmit={props.handleSubmit}>
		<input onChange={props.handleChange} placeholder="whatever" value={props.search}/>
		<button>submit</button>
		</form>
		<div>{props.search}</div>
	</div>

)
export default Giphy
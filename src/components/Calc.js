import React from "react"
export default class Calc extends React.Component {

	state = {
		diet: "", 
		input1: "", 
		input2: "", 
	};

	handleChange = (event, fieldName) => {
		console.log(event.target.name);
		this.setState({[event.target.name]: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state); 
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}> 
				<select value={this.state.diet}>
					<option>Meat Lover</option> 
					<option>Average</option> 
					<option>No Beef</option> 
					<option>Vegitarian</option> 
					<option>Vegan</option> 
				</select>
				<input 
					name="input1"
					value={this.state.input1} 
					onChange = {this.handleChange}
				/>
				<input 
					name="input2"
					value={this.state.input2} 
					onChange={this.handleChange}
				/>
				<button type="submit"> 
					submit 
				</button> 
			</form> 
		);
	}
	
}

// export default Calc

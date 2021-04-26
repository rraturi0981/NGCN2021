import React from "react"
import Output from "./Output"

const initialState = {
		recycle: "Yes",
		numRooms: "",
		diet: "Meat Lover", 
		transportation: "Car",
		miles: "", 
		long_flights: "", 
		short_flights: "", 
		medium_flights: "", 
		submit: false,
}

const list = ["recycle", "diet", "transportation"];
export default class Calc extends React.Component {

	state = initialState; 


	handleChange = (event, fieldName) => {
		console.log(event.target);
		console.log(event.target.name);
		const re = new RegExp("^[0-9]*$");
		if(list.includes(event.target.name) || re.test(event.target.value)){ 
			this.setState({[event.target.name]: event.target.value});
		}
		else{
			this.state.setState(initialState);
			alert("input error, please try again");
			window.location.reload();
		}
	};
	

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state); 
		this.setState({
			submit: true
		});
	}


	render() {
		return (
			<div> 
				{this.state.submit ? <Output input={this.state}/> : 
						(
							<form onSubmit={this.handleSubmit}> 
								Does you recylce?	
								<select 
								name = "recycle"
								value = {this.state.recycle}
								onChange = {this.handleChange}
								>
									<option>Yes</option> 
									<option>No</option> 
                </select>
								How many occupied rooms do you have? 
                <input
                    name="numRooms"
                    value={this.state.numRooms}
                    onChange={this.handleChange}
                />
								Please select what best describes your daily diet:
								<select
								name = "diet"
								value = {this.state.diet}
								onChange = {this.handleChange}>
									<option>Meat Lover</option> 
									<option>Average</option> 
									<option>No Beef</option> 
									<option>Vegitarian</option> 
									<option>Vegan</option> 
								</select>
								{/* TRANSPORTATION */} 
								What is your usual daily method of transportation?
								<select 
									name = "transportation"
									value={this.state.transportation}
									onChange = {this.handleChange}>
										<option>car</option>
										<option>bus</option>
										<option>bike</option>
										<option>subway/metro</option>
										<option>walk</option>
								</select>
								How far do you usually travel in a year? (in km)?
								<input
                    name="miles"
                    value={this.state.miles}
                    onChange = {this.handleChange}
                />
								How many long (4000+km) round trip flights have you gone? 
								<input
                    name="long_flights"
                    value={this.state.long_flights}
                    onChange = {this.handleChange}
                />
								How many medium (500-4000km) round trip flights have you gone? 
								<input
                    name="medium_flights"
                    value={this.state.medium_flights}
                    onChange = {this.handleChange}
                />
								How many short (0-500km) round trip flights have you gone? 
								<input
                    name="short_flights"
                    value={this.state.short_flights}
                    onChange = {this.handleChange}
                />
								{/* SUBMIT */}
								<button type="submit"> 
									submit
								</button> 
							</form> 
						)
					}
			</div>
		);
	}
	
}

// export default Calc

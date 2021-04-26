import React from "react"

const inputToNum = {
	"Yes":  0.1819, 
	"No":  0.3139,
	"Meat Lover": 3.3, 
	"Average": 2.5, 
	"No Beef": 1.9, 
	"Vegitarian": 1.7, 
	"Vegan": 1.5, 
	"Car": 0.000404, 
	"Bus": 0.000822, 
	"Bike":  0.00014, 
	"Walking":  0.00011, 
}

const Output = ({input}) => {
		const refreshPage = () => window.location.reload();
		return(
				<div>
					{/* <h1>{inputToNum[input.diet]}</h1> */}
					 <h1>{inputToNum[input.recycle] + (13.9795*parseFloat(input.numRooms)) + inputToNum[input.diet] + (inputToNum[input.transportation]*parseFloat(input.miles)) + (0.00025*parseFloat(input.short_flights)) + (0.00014 * parseFloat(input.medium_flights)) + (0.00017*parseFloat(input.long_flights))} metric tons of CO2 per year</h1> 
					{/* <h1>{input.miles}</h1> */}
					<button onClick={refreshPage}>Re Do</button>
				</div>
		)
}
export default Output

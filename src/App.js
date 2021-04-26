import React, { useState } from 'react'
import Calc from './components/Calc';
// import Output from './components/Output';
const App = () => {
	// const [start, setOutput] = useState(false);
	return (
		<div className = 'root'>
			{/* { start ? <Calc /> : <Output props={setOutput} input={this.start.props.input1}/>} */}
			<Calc />
		</div> 
	)
}
export default App

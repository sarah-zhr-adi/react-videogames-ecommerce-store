import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-6">
    			column 1 
	    	</div>
	    	<div className="col-6">
				column 2
				<i class="fa fa-bandcamp" aria-hidden="true"></i>
	    	</div>
    	</div>
    </div>
  );
}

export default App;

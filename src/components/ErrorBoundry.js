import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props) {
	 	super(props);
	 	this.state={
		hasError: false
	  	}
    }

   componentDidcatch(error, info) {
   	this.setstate({hasError:true})
   }
   
   render(){
   	if(this.state.hasError){
   		return <h1>Ooooop</h1>
   	}
   	return this.props.children
   }
}


export default ErrorBoundry;
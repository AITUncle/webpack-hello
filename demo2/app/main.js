var hello = require('./hello.js');
document.getElementById('root').appendChild(hello());

//es2015 class
class HelloClass{
	sayHello(){
		var hello = document.createElement('div');
		hello.textContent = "say hello by es2015 class";
		return hello;
	}
}
document.getElementById('root').appendChild(new HelloClass().sayHello());


//es2015 react
// import React from 'react';
// import {render} from 'react-dom';
// import HelloReact from './HelloReact';

// render(<HelloReact />, document.getElementById('root_react_div'));
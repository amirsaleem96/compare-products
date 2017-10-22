import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @description Main class for entry point which contains all sections for header component
 * @return html generated for header 
*/
class Header extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             btnText: "click me to see the magic"
         }
         this.showAlert = this.showAlert.bind(this);
     }
     showAlert(){
         alert('Yeah! you just fired an event');
     }
     render(){
         var names = ['Amir','Ashish','Rajneesh','Amir'];
         var namesList = names.map(function(item,index){
            return <p key={index}>{item}</p>  
        }) 
         return(
             <header><Logo /></header>
         )
     }
}

class Logo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>Logo</h1>
        )
    }
}

export default Header;
import React from 'react';
import ReactDOM from 'react-dom';

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
         return(
             <header>
                 {
                  names.map(function(item,index){
                      return <button key={index}>{item}</button>  
                  })  
                 }
             </header>
         )
     }
}

export default Header;
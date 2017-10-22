import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           quote: 'loading...' 
        }
        this.performLogin = this.performLogin.bind(this);
        this.performSignup = this.performSignup.bind(this);
    }
    performLogin() {
        axios.get('https://talaikis.com/api/quotes/random')
          .then(res => {
              this.setState({
                  quote: res.data.quote
              }) 
          })
          .catch(err => {
            console.log(err);
         })  
    }
    performSignup() {
        alert('Please fill in the details');
    }
    render(){
        return(
            <div>
                <label htmlFor="">Username</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="text"/>
                <button onClick = {this.performLogin}>Submit</button>
                <h1>Or if you don't have an account, sign up</h1>
                <label htmlFor="">First Name</label>
                <input type="text"/>
                <label htmlFor="">LastName</label>
                <input type="text"/>
                <label htmlFor="">DOB</label>
                <input type="text"/>
                <label htmlFor="City">City</label>
                <input type="text"/>
                <label htmlFor="">Country</label>
                <input type="text"/>
                <label htmlFor="">Address</label>
                <input type="text"/>
                <label htmlFor="">Highest Education</label>
                <input type="text"/>
                <label htmlFor="">Occupation</label>
                <input type="text"/>
                <label htmlFor="">Gender</label>
                <select name="" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                </select>
                <button onClick = {this.performSignup}>Submit</button>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default LogIn;
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../views/header/Header.jsx';
import Footer from '../views/footer/Footer.jsx';
import LogIn from '../views/main/main.jsx';

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <LogIn />
                <Footer />
            </div>
        )
    }
}

export default App;
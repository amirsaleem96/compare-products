import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../views/header/Header.jsx';
import Footer from '../views/footer/Footer.jsx';

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default App;
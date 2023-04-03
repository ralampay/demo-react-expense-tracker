import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;
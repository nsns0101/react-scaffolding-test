//메인 라우터
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layuot/Header";
import Footer from "./layuot/Footer";
function Example() {
    return (
        <div>
            <Header/>
            <Footer/>
        </div>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

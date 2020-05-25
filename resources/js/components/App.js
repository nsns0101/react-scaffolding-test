//메인 라우터
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layuot/Header";
import Footer from "./layuot/Footer";
import Home from "./routes/Home";
import Bad from "./routes/Bad";
function App() {
    return (
        <BrowserRouter>
            <Header/>
            {/* 왜 포스트 방식으로만 되지? */}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/products" exact={true} component={Bad}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

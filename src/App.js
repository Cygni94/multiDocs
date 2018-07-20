import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/css/style.css";
import Header from "./components/header";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;

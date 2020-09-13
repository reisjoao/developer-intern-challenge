'use strict';

// const e = React.createElement;

export class buttonEncurtar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { encurtado: false, count = 0 };
    }

    render() {
        if (!this.state.encurtado) {


        }
        return [
            <button onClick={this.setState({ count = count + 1 })}> Encurtar </button>

        ];
    }
}

import app from "./app"
import ReactDOM from "react-dom"
ReactDOM.render(
    <app />,
    document.getElementById("root")
)
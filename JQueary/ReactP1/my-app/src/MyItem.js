import React from "react";


class Item extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
            totalReminding: 100,
        }
    }
    clickMe() {
        console.log('pressed')

        this.setState({
                clicks: this.state.clicks + 1
        })
    }
    render() {
        return(
            <div>
                <h1 onClick={() => this.clickMe()}>want some {this.props.name}</h1>
                <span>{this.state.clicks} times pressed</span>
            </div>
        )
    }
}

export default Item
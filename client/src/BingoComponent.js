import React, { Component } from 'react'
import axios from 'axios';
class BingoComponent extends Component {

    constructor() {
        super();
        this.state = {
            bongo: 'pending'
        }
    }

    componentWillMount() {
        axios.get('api/bingo')
            .then((response) => {
                this.setState(() => {
                    return { bongo: response.data.message }
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return <h1>Bingo {this.state.bongo}</h1>;
    }
}

export default BingoComponent; 
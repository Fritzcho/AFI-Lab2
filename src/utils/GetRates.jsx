import React from 'react'

class GetRates extends React.Component {
    state = {
        returnRate: 0,
    }

    refreshList() {
        fetch("https://v6.exchangerate-api.com/v6/2b51888768f66e70197a00ce/latest/SEK")
        .then(response=>response.json())
        .then(data=>{
            this.setState({returnRate:data.conversion_rates[this.props.exchange]});
            console.log(this.props.rate);
            this.setState({returnRate: this.state.returnRate*this.props.rate})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        return(
            <div>
                <h2>{this.state.returnRate} {this.props.exchange}</h2>
            </div>
        );
    }
}

export default GetRates
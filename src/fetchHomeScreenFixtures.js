import React from "react";

export default class FetchHomeSCreenFixtures extends React.Component {
    state = {
        loading: true,
        fixtures: null
    };

async componentDidMount() {
    const url = "http://localhost:8000/fixtures";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);
    this.setState({loading: false, fixtures: data.results[0]});
}

render() {
    if(this.state.loading){
        return <div>Loading...</div> 
    }

    if(!this.state.fixtures){
        return <div>Could not retieve fixtures</div>
    }

    return (
        <div>
            <div>
                {this.state.fixtures}
            </div>
        </div>
    )
}

}
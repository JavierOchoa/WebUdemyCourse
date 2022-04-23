import React from "react";

class ListMaker extends React.Component{
    render() {
        return(
            <li>
                <a>{this.props.name}</a>
            </li>
        )
    }


}

class StarWars extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            height: null,
            mass: null,
            homeworld: null,
            affiliations: [],
            gotInfo: false
        }
    }

    getInformation(){
        console.log('Does this button works?')
        let randomNumber = Math.ceil(Math.random() * 89)
        let url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations,
                    gotInfo: true
                })
            })
    }


    render() {
        let affilitems = this.state.affiliations.map((affi, i) =>{
            return <ListMaker key={i} name={affi}/>
        })
        return (
            <div>
                {
                    this.state.gotInfo &&

                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height}</p>
                        <p>{this.state.mass}</p>
                        <p>{this.state.homeworld}</p>
                        <ul>
                            {affilitems}
                        </ul>
                    </div>
                }
                <button className={'btn'} name={'refresh-button'} onClick={() => this.getInformation()}>Refresh</button>
            </div>
        )
    }
}

export default StarWars
import React from "react";

class AffiliName extends React.Component{
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
            mass: null,
            homeworld: null,
            affiliations: [],
            gotInfo: false
        }
    }

    getNewCharacter(){
        console.log('Hay alguien aqui con vida?')
        let randomNumber = Math.ceil(Math.random() * 89)
        console.log(randomNumber)
        let url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    mass: data.mass,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations,
                    gotInfo: true
                })
            })
    }

    render() {
        const affiliations = this.state.affiliations.map((affi, i) => {
                return <AffiliName key={i} name={affi} />
            })

        return (
            <div>
                {
                    this.state.gotInfo &&

                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.mass}</p>
                        <p>{this.state.homeworld}</p>
                        <ul>
                            {affiliations}
                        </ul>
                    </div>
                }
                <button className={'button'} onClick={() => this.getNewCharacter()} name={'btn'}>Press Me</button>
            </div>
        );
    }
}



export default StarWars
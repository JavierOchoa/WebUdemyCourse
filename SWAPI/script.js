const logging = () => console.log("works?")

const getInfo = () => {
    document.getElementById("card").style.display = "inline-flex"
    const randomNumber = Math.ceil(Math.random() * 84)
    // const randomNumber = 1
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(img => {
            document.getElementById("image").src=img.image;
            document.getElementById("name").innerText = 'Mhmm.. Who could this be?'
            document.getElementById("gender").innerText = 'Asking for gender...'
            document.getElementById("homeworld").innerText = 'Looking for his home in the galaxy'
            document.getElementById("films").innerText = `Re-watching the whole saga to tell you movie appearances (one moment)`
        })
    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").innerText = `Name: ${data.name}`;
            chGender = data.gender.toString()
            characterGender = chGender.charAt(0).toUpperCase() + chGender.slice(1)
            document.getElementById("gender").innerText = `Gender: ${characterGender}`;
            fetch(data.homeworld)
                .then(response => response.json())
                .then(worldname => {
                    document.getElementById("homeworld").innerText = `Homeworld: ${worldname.name}`;
                })
            var movies = []
            for(let movie in data.films) {
                fetch(data.films[movie])
                    .then(response => response.json())
                    .then(movieInfo => {
                        movies.push(` ${movieInfo.title}`)
                        document.getElementById("films").innerText = `Movies: ${movies}`
                    })
            }
        })
}
document.getElementById("rbuttonr").addEventListener("click", getInfo);
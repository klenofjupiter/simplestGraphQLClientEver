const query = `query { allLifts { name status } }`

const url = "https://snowtooth.herokuapp.com";

const opts = {
 method: "POST",
 headers: {"Content-Type": "application/json"}, 
 body: JSON.stringify({ query })
}

fetch(url, opts)
.then( res => res.json())
.then((data) => console.log('DATA', data));
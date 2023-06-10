const apiKey = "hlDT9aEJpV2pDHmlVDLUPyQnai5DurmR";
const url = "https://api.giphy.com/v1/gifs/random";

const peticion = fetch(`${url}?api_key=${apiKey}`);

peticion
    .then( response => response.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );
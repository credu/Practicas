const getImagen = async () => {
    try {
        const apiKey = "hlDT9aEJpV2pDHmlVDLUPyQnai5DurmR";
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        
        const img = document.createElement("img");
        img.src = url;
        document.body.append( img );
    } catch (error) {
        // Manejo del error
        console.error(error)
    }
}

getImagen();



import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( categoria );
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect( () => {
        getImages();
        //getGifs( categoria ).then( newImages => setImages(newImages));
    }, [  ])
    return {
        images,
        isLoading
    }
}

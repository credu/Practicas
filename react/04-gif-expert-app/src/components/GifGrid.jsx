import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ onRemoveCategory, categoria }) => {

    const { images, isLoading } = useFetchGifs( categoria );

    const onClickButton = () => {
        onRemoveCategory( categoria );
    }

    return (
        <>
            <div className="card-grid animate__animated animate__fadeIn animate__slow">
                <h3>{categoria}</h3>
                
                {
                    isLoading && (<h2 className="animate__animated animate__flash animate__infinite animate__delay-5s">Cargando...</h2>)
                }
                {
                    images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
                <button onClick={ onClickButton }>X</button>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}
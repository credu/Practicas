import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const { id, name, sprites } = !!data && data;
    
    const nextQuote = () => {
        increment(1);
    }

    return (
        <>
            <h1>Pokemon Characters</h1>
            <br />

            {
                isLoading ? <LoadingQuote />
                : <Quote id={id} sprites={sprites} name={name} />
            }

            <button 
            className="btn btn-primary"
            onClick={ nextQuote }
            >
                Next Quote
            </button>
        </>
    )
}

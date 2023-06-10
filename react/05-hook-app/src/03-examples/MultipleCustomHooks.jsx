import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const { id, name, sprites } = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <br />

            {
                isLoading ? <LoadingQuote />
                : <Quote id={id} sprites={sprites} name={name} />
            }

            <button 
            className="btn btn-primary"
            onClick={ () => increment() }
            disabled={ isLoading }
            >
                Next Quote
            </button>
        </>
    )
}

import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState( ['One Punch'] );
  
  const onAddCategory = ( newCategory ) => {

    // Si la categoria esta en la lista ponla de primera y si ya esta de primera no hagas nada
    if ( categorias[0] == newCategory ) return;

    if ( categorias.includes(newCategory) ) {
      const filteredCategorias = categorias.filter(categoria => categoria !== newCategory);
      return setCategorias( [newCategory, ...filteredCategorias] );
    }

    setCategorias( [newCategory, ...categorias] );
  }

  const onRemoveCategory = ( removeCategory ) => {
    setCategorias( [...categorias].filter(categoria => categoria != removeCategory) );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ event => onAddCategory(event) }
      />

      {
        categorias.map( categoria => (
          <GifGrid key={ categoria } categoria={ categoria } onRemoveCategory={ event => onRemoveCategory(event) } />
        ))
      }

    </>
  )
}
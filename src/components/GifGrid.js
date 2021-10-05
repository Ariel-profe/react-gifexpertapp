// Componente que recibira elementos que coincidan con las categorias hechas

import { useFetchGifs } from "../hooks/useFetchGifs";

// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const {data: images, loading} = useFetchGifs( category );

  
  //Use effect permite ejecutar un codigo de manera condicional
  // useEffect(() => {
  //   getGifs(category)
  //       .then(imgs => setImages(imgs))
  // }, [category]); //si no hay listas de dependencias, el codigo se ejecuta una vez

 

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category} </h3>

      {/* { loading ? 'Cargando...' : null} */}
      {loading && <p className='animate__animated animate__flash'>Loading...</p>}
      <div className="card-grid">
        
          {
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
          }
        </div>
    </>
  );
};

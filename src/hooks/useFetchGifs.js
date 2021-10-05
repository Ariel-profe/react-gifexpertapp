import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

      
  //Use effect permite ejecutar un codigo de manera condicional
  useEffect(() => {

    getGifs( category )
        .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
        })
   
  }, [category]); //solo evaluar el cambio de efecto si la categoria cambia


    return state; // es un obj con una data y un loading en true
}
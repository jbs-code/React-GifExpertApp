//Functional hooks
//Nos sirven para tener componentes más simples en caso
//de que dentro del componente se vean muy complicados,
//entonces es mejor tenerlos aparte.
//Nótese que dentro de nuestros hooks ponemos tener otros useState  y useEffect.
import { useState } from "react";
import { getGif } from "../helpers/getGif";
import { useEffect } from "react";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(category).then(img => {

            setState({
                data: img,
                loading: false
            })

        });
    }, [category]);

    return state;
}
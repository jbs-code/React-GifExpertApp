import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category);

    //el useEffect en este caso hace que getGif se ejecute cuando category cambie. 
    //Eso lo penemos en el segundo argumento que recibe. useEffect, a diferencia de useState,
    //nos permite manejar estados pero bajo ciertas condiciones que nosotros le digamos.
    //DEJO EL COMENTARIO PERO EL USEEFECT DE ESTE COMPONENTE LO PASE AL useFetchGifs

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__shakeX">Loading...</p>}{/*Operador ternario simplificado*/}
            <div className='cardGrid'>
                {images.map(img => <GifGridItem key={img.id} {...img} />)} {/*Nota como mandamos img a las props con spread */}
            </div>
        </>
    );
}
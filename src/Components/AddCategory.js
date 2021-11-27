import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('');//Es importante dejar una cadena vacía para evitar un undefined que genere errores

    //Si ponemos el inputValue en el input nos daremos cuenta de que no podemos modificarlo
    //Tenemos que utilizar onChange en el input y llamar, en este caso, handleInputValue
    //que tiene como argumento el evento que recibe onChange cuando queremos modificarlo,
    //y tenemos que buscar el value para así modificar nuestro hook. 
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    //Esta función previene que se renderise toda la página cuando hacemos el submit del form
    //específicamente el e.preventDefault() es la que hace esa fucnión.
    const handleSubmit = (e) => {
        e.preventDefault();

        //validación para que no nos deje agregar undefined en el arreglo
        if (inputValue.trim().length > 2) {
            setCategory(c => [inputValue, ...c]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={handleInputValue} />
        </form>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
 }

export default AddCategory;

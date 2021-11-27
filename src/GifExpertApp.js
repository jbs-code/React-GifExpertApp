import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [category, setCategory] = useState(['Goku']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategory={setCategory}/>
            <hr />

            {/* <button onClick={handleAdd}>Añadir</button> */}
            <ol>
                {
                    category.map(cat => 
                        <GifGrid category={cat} key={cat}/>
                    )
               }
            </ol>
        </>
    );
}

export default GifExpertApp;

export const getGif = async (category) => {
    //encodeURI hace los cambios necesarios para que nuestro url sea correcto(borra espacios, pone caracteres, etc).
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=aJmRp94OEdhpqgB9ArGarGWIIYLS33n8`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}
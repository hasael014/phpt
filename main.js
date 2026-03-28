const root = document.querySelector('[class="root"]')

root.innerHTML = 'test'

async function api(nameurl = null) {

    const hostname = 'https://nondeliberate-proacting-briggs.ngrok-free.dev'
    // const hostname = window.location.origin

    let url = hostname + '/api/v01';

    if (nameurl != null) {
        url += '/' + nameurl
    }


    try {
        const res = await fetch(url, {
            method: 'GET', // o POST, según tu caso
        headers: {
            'Content-Type': 'application/json',
            // ESTA ES LA CLAVE:
            'ngrok-skip-browser-warning': 'true',
            // Opción B: User-Agent personalizado (ayuda a saltar la validación de ngrok)
            'User-Agent': 'MyCustomApp/1.0'
        }
    });

    if (!response.ok) throw new Error('Error en la respuesta');
    
    const data = await response.json();
    console.log(data);

        // const data = await res.json();
        // console.log("Datos cargados:", data);

        return data; // Devolvemos los datos para procesarlos en el Dashboard
    } catch (error) {
        console.error("Error al consultar la URL:", url);
        console.error("Detalle:", error.message);
        return null;
    }



}

api('main')
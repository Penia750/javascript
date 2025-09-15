const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_pokemon')
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (pokemon) => {
    const baseURL = 'https://pokeapi.co/'
    const endpoint = `api/v2/pokemon/${pokemon}`
    const url = `${baseURL}${endpoint}` 

    axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById('show_info')
    let habilidades = data.abilities.map(a => a.ability.name).join(", ")
    let tipos = data.types.map(t => t.type.name).join(", ")
    respuesta.innerHTML = `
        <p><b>Nombre:</b> ${data.name}</p>
        <p><b>ID:</b> ${data.id}</p>
        <p><b>Altura:</b> ${data.height}</p>
        <p><b>Peso:</b> ${data.weight}</p>
        <p><b>Experiencia Base:</b> ${data.base_experience}</p>
        <p><b>Tipos:</b> ${tipos}</p>
        <p><b>Habilidades:</b> ${habilidades}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}" width="200" height="200">

    `
}
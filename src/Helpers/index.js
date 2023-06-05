const loaders = async () => {
    const experiencias = await fetch(`../../locales/es.json`);
    const experienciaJSON = await experiencias.json();
    return experienciaJSON;
}

export default loaders;
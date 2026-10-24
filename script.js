function notificarNtfy(nombreVale) {
    const tema = "valeria_regalo_secreto19"; 
    const url = `https://ntfy.sh/${tema}`;

    fetch(url, {
        method: 'POST', 
        body: `Tu wawa acaba de canjear: ${nombreVale} 🥰`,
        headers: {
            'Title': '¡Vale Canjeado!'
        }
    })
    .then(response => {
        alert("¡Vale canjeado con éxito!");
    });
}

// Definizione di un array di oggetti che rappresenta i prodotti Nike
let scarpe = [
    {id: 1, nome: 'Nike Air Max 270', prezzo: 129.99, taglia: 46, colore: 'Bianco', immagine: 'Img/NikeAirMax-270.png', disponibile: true},
    {id: 2, nome: 'Nike React Infinity Run Flyknit', prezzo: 159.99, taglia: 41, colore: 'Bianco', immagine: 'Img/NikeReactInfinityRunFlyknit.png', disponibile: false},
    {id: 3, nome: 'Nike Air Force 1', prezzo: 109.99, taglia: 39, colore: 'Nero', immagine: 'Img/Nike Air Force 1.png', disponibile: false},
    {id: 4, nome: 'Nike Pegasus 40', prezzo: 119.99, taglia: 35, colore: 'Nero', immagine: 'Img/NikePegasus40.webp', disponibile: true},
    {id: 5, nome: 'Nike Air Max 90', prezzo: 119.99, taglia: 40, colore: 'Bianco', immagine: 'Img/Nike Air Max 90.webp', disponibile: true},
    {id: 6, nome: 'Nike Revolution 7 Next Nature SE', prezzo: 59.99, taglia: 43, colore: 'Bianco/Grigio', immagine: 'Img/Nike Revolution 7 Next Nature SE.webp', disponibile: false},
    {id: 7, nome: 'Nike Structure 25', prezzo: 129.99, taglia: 37, colore: 'Bianco', immagine: 'Img/Nike Structure 25.webp', disponibile: true},
    {id: 8, nome: 'Nike Air Max 97', prezzo: 179.99, taglia: 33, colore: 'Nero', immagine: 'Img/Nike Air Max 97.webp', disponibile: true},
    {id: 9, nome: 'Nike Pegasus Trail 4', prezzo: 139.99, taglia: 45, colore: 'Grigio', immagine: 'Img/Nike Pegasus Trail 4.webp', disponibile: true},
    {id: 10, nome: 'Nike Air VaporMax 2021 FK', prezzo: 209.99, taglia: 31, colore: 'Nero', immagine: 'Img/Nike Air VaporMax 2021 FK.webp', disponibile: false}
];

// Stampa l'array scarpe e il suo tipo per il debug
console.log(scarpe, typeof(scarpe));

// Attende il caricamento del DOM per generare le carte dei prodotti
document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');  // Seleziona il contenitore dei prodotti
    let str = '';  // Variabile per accumulare il codice HTML per ciascun prodotto

    // Ciclo per generare una card per ogni prodotto
    for (const s of scarpe) {
        str += `
        <div class="card">
            <img src="${s.immagine}" alt="${s.nome}">
            <p style="font-weight: bold; font-size: 20px; margin-bottom: 10px; margin-top: 10px;">${s.nome}</p>
            <p>${s.prezzo} €</p>
            <p>Taglia: ${s.taglia}</p>
            <p>Colore: ${s.colore}</p>
            <p>Disponibile: ${s.disponibile ? 'SI' : 'NO'}</p>
        </div>
        `;
    }
    result.innerHTML = str;  // Inserisce il codice HTML generato nel contenitore
});
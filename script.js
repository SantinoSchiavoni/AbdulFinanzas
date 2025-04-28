document.getElementById('comprar').addEventListener('click', function() {
    const ticker = document.getElementById('ticker').value.toUpperCase();
    const cantidad = document.getElementById('cantidad').value;
    
    if (ticker && cantidad > 0) {
        alert(`¡Felicidades, compraste ${cantidad} acciones de $PONZIF, ya sos parte de la familia!`);
    } else {
        alert('Por favor, ingresa un ticker y una cantidad válida.');
    }
});

document.getElementById('vender').addEventListener('click', function() {
    const ticker = document.getElementById('ticker').value.toUpperCase();
    const cantidad = document.getElementById('cantidad').value;
    
    if (ticker && cantidad > 0) {
        alert(`¡Felicidades, compraste ${cantidad} acciones de $PONZIF!`);
    } else {
        alert('Por favor, ingresa un ticker y una cantidad válida.');
    }
});

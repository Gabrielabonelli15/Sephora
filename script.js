function teste(preference) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';

    if (preference === 'leve') {
        document.getElementById('produto1').innerText = 'Base leve';
        document.getElementById('produto2').innerText = 'Gloss incolor com brilho';
        document.getElementById('produto3').innerText = 'Máscara de cílios suave';
    } 
    
    else {
        document.getElementById('produto1').innerText = 'Base de alta cobertura';
        document.getElementById('produto2').innerText = 'Batom vermelho intenso';
        document.getElementById('produto3').innerText = 'Sombra escura e marcante';
    }
}
teste(preference);
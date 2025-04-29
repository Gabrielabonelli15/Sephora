function showResults(preference) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    if (preference === 'leve') {
        document.getElementById('product1').innerText = 'Base leve e natural';
        document.getElementById('product2').innerText = 'Batom nude';
        document.getElementById('product3').innerText = 'Máscara de cílios suave';
    } 
    
    else {
        document.getElementById('product1').innerText = 'Base de alta cobertura';
        document.getElementById('product2').innerText = 'Batom vermelho intenso';
        document.getElementById('product3').innerText = 'Sombra escura e marcante';
    }
}
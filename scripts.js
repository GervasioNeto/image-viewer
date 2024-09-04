function mostrarImg(caminho){
    const imgG = document.getElementById('imagem-grande');
    const imgZ = document.getElementById('imagem-zoom');
    imgG.src = caminho;
    imgZ.src = caminho;
}
document.getElementById("imagem-grande").addEventListener('mousemove', function(e){
    const zoomCont = document.getElementById('zoom-container');
    const zoomImg = document.getElementById('imagem-zoom');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x/rect.width) * 100;
    const yPercent = (y/rect.height) * 100;
    zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    zoomImg.style.transform = 'scale(2)';
    zoomCont.style.display = 'block';
})
document.getElementById('imagem-grande').addEventListener('mouseleave', function(){
    const zoomImg = document.getElementById('imagem-zoom');
    zoomImg.style.transform = 'scale(1)';
    const zoomField = document.getElementById('zoom-container');
    zoomField.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function(){
    const listaImg = document.getElementById('lista-imagens');
    const numImg = 12;
    for (let i = 1; i <= numImg; i++){
        const img = document.createElement('img');
        img.src = `imagens/imagem${i}.jpg`;
        img.alt = `Imagem ${i}`;
        img.classList.add('miniatura');
        img.onmouseover = () => mostrarImg(img.src);
        listaImg.appendChild(img);
    }
});
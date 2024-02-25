

const dezAccordion = document.querySelectorAll('.dez');

dezAccordion.forEach(dezAccordion => {
    dezAccordion.addEventListener('click', (event) => {

        const contenedorPadre = event.target.parentNode.parentNode;
        let expandAcordion = contenedorPadre.querySelector('.accordion');                          
        const ruta = event.target.src.slice(-8);
        
        if (ruta == 'plus.svg'){
            event.target.src = './assets/images/icon-minus.svg';
            expandAcordion.classList.remove('expand-none');
            expandAcordion.classList.add('expand');
            return
        }else {
            event.target.src = './assets/images/icon-plus.svg';
            expandAcordion.classList.remove('expand');
            expandAcordion.classList.add('expand-none');
        }
    });
});


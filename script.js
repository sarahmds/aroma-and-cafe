let nomeUser

function salvarNome(){
    const inputNomeUser = document.getElementById('nome-usuario');
    const erroMsg = document.querySelector('.erro-nome')

    if (inputNomeUser.value){
        nomeUser = inputNomeUser.value;
        erroMsg.style.display = 'none';
        window.location.href  += 'menu.html'

    } else {
        erroMsg.style.display = 'block';
    };
};

function pegarMenuAtivo({ target }) {
    const BTNs_Lista = document.querySelectorAll('.escolhas-menu button')

    BTNs_Lista.forEach((BTN) => {
        if (BTN.classList.contains('botao-ativo')){
            BTN.classList.remove('botao-ativo');

            esconderMenu(BTN);
        };
    });

    target.classList.add('botao-ativo');
    mostrarMenu(target)
};

function mostrarMenu(target){
    if (target.id === 'cafes'){
        const menuCafes = document.getElementById('menu-cafes')

        menuCafes.style.display = 'grid'

    } else if (target.id === 'sucos'){
        const menuSucos = document.getElementById('menu-sucos')

        menuSucos.style.display = 'grid'

    } else if (target.id === 'massas'){
        const menuMassas = document.getElementById('menu-massas');

        menuMassas.style.display = 'grid';
    } else if (target.id === 'sobremesas'){
        const menuSobremesas = document.getElementById('menu-sobremesas');

        menuSobremesas.style.display = 'grid';
    } else if (target.id === 'combos'){
        const menuCombos = document.getElementById('menu-combos');

        menuCombos.style.display = 'grid';
    }
}

function esconderMenu(target){
    if (target.id === 'cafes'){
        const menuCafes = document.getElementById('menu-cafes')

        menuCafes.style.display = 'none'

    } else if (target.id === 'sucos'){
        const menuSucos = document.getElementById('menu-sucos')

        menuSucos.style.display = 'none'

    } else if (target.id === 'massas'){
        const menuMassas = document.getElementById('menu-massas');

        menuMassas.style.display = 'none';
    } else if (target.id === 'sobremesas'){
        const menuSobremesas = document.getElementById('menu-sobremesas');

        menuSobremesas.style.display = 'none';
    } else if (target.id === 'combos'){
        const menuCombos = document.getElementById('menu-combos');

        menuCombos.style.display = 'none';
    }
}
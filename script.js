function salvarNome(e){
    const inputNomeUser = document.getElementById('nome-usuario');
    const erroMsg = document.querySelector('.erro-nome')

    if (inputNomeUser.value){
        let nomeUser = inputNomeUser.value;
        localStorage.setItem('NomeUser', nomeUser)
        erroMsg.style.display = 'none';
        window.location.href  = 'menu.html'

    } else {
        e.preventDefault()
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
};

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
};

function calcularComprovante(){
    const menuInputs = document.querySelectorAll('#qnt-item');
    let itemNome
    let itemPreco
    let itemQnt
    let totalCompra = 0;

    menuInputs.forEach((elementoInput) => {
        if (elementoInput.value > 0){

            const container = elementoInput.parentElement.parentElement

            itemNome = container.querySelector('span h2').textContent;
            itemPreco = container.querySelector('.menu-preco').textContent;
            console.log(itemPreco)
            itemQnt = parseInt(elementoInput.value);
            itemPreco = parseFloat(itemPreco.replace('R$', '')) * itemQnt

            console.log(`Nome: ${itemNome}`);
            console.log(`Valor: R$ ${itemPreco}`);
            console.log(`Quantidade: ${itemQnt}`);

            totalCompra += itemPreco;
        };
    });

    console.log(`Total da compra: R$ ${totalCompra}`)
};
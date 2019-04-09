// acao modal1
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('button1').addEventListener('click',(event)=>{
        document.getElementById('modal1').classList.add('is-active');
        console.log( document.getElementById('modal1').classList)
    })
})

function closeModal1(){
    document.getElementById('modal1').classList.remove('is-active')
    console.log( document.getElementById('modal1').classList)
}

// acao modal2
document.addEventListener('DOMContentLoaded', (event) => {
    // pega o id do botão
    document.getElementById('button2').addEventListener('click',(event) => {
        // adicona a classe is-active do Buma
        document.getElementById('modal2').classList.add('is-active');
        // exibindo a classe do elemento cujo o id = 'modal2'
        // isso fará com que o modal aparaça
        console.log( document.getElementById('modal2').classList );
    })
})

function closeModal2(){
    // remove a classe 'is-active' para que o modal se recolha
    document.getElementById('modal2').classList.remove('is-active')
    // mostrando o resaultado no console
    console.log( document.getElementById('modal2').classList)
}

// acao modal3
document.addEventListener('DOMContentLoaded', (event) => {
    // pega o id do botão
    document.getElementById('button3').addEventListener('click',(event) => {
        // adicona a classe is-active do Buma
        document.getElementById('modal3').classList.add('is-active');
        // exibindo a classe do elemento cujo o id = 'modal2'
        // isso fará com que o modal aparaça
        console.log( document.getElementById('modal3').classList );
    })
})

function closeModal3(){
    // remove a classe 'is-active' para que o modal se recolha
    document.getElementById('modal3').classList.remove('is-active')
    // mostrando o resaultado no console
    console.log( document.getElementById('modal3').classList)
}

// acao modal4
document.addEventListener('DOMContentLoaded', (event) => {
    // pega o id do botão
    document.getElementById('button4').addEventListener('click',(event) => {
        // adicona a classe is-active do Buma
        document.getElementById('modal4').classList.add('is-active');
        // exibindo a classe do elemento cujo o id = 'modal2'
        // isso fará com que o modal aparaça
        console.log( document.getElementById('modal4').classList );
    })
})

function closeModal4(){
    // remove a classe 'is-active' para que o modal se recolha
    document.getElementById('modal4').classList.remove('is-active')
    // mostrando o resaultado no console
    console.log( document.getElementById('modal4').classList)
}

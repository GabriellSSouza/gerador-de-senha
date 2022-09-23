let slider = document.getElementById('slider')
let exibirtamanho = document.getElementById('exibirsenha')
let gerarsenha = document.getElementById('gerarsenha')
let containerPassword = document.getElementById('container-password')
let senhagerada = document.getElementById('senhagerada')


slider.addEventListener('input', exibir)
gerarsenha.addEventListener('click', gerardiv)
senhagerada.addEventListener('click', copiarsenha)

function exibir(){
    exibirtamanho.innerHTML = slider.value
}
exibirtamanho.innerHTML = slider.value

let dados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456!@#$&'



function gerardiv(){
    containerPassword.style.display = 'block'
    let senha = ''
    
    for(let i = 0 , n = dados.length; i < slider.value ; ++i){
        senha += dados.charAt(Math.floor(Math.random() *n))
    }
    senhagerada.innerHTML = senha
    novasenha = senha
}



function copiarsenha(){
    navigator.clipboard.writeText(novasenha)
    alert('Senha copiada com sucesso!')
}

const cpf = document.getElementById('cpf')

cpf.addEventListener('keypress', (e) => mascaraCPF(e.target.value)) 
cpf.addEventListener('change', (e) => mascaraCPF(e.target.value)) 

const mascaraCPF = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/(\d{3})(\d)/,"$1.$2")
    valor = valor.replace(/(\d{3})(\d)/,"$1.$2")
    valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    cpf.value = valor
}


const tel = document.getElementById('tel')

tel.addEventListener('keypress', (f) => mascaraTelefone(f.target.value))
tel.addEventListener('change', (f) => mascaraTelefone(f.target.value)) 

const mascaraTelefone = (tele) => {
    tele = tele.replace(/\D/g, "")
    tele = tele.replace(/^(\d{2})(\d)/,"($1) $2")
    tele = tele.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = tele 
}
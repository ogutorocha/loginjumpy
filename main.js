function cadastro() {
    // recebendo os dados
    var nmNome = document.getElementById("nome").value;
    var nmEmail = document.getElementById("email").value;
    var nmFone = document.getElementById("tel").value;
    var nmCpf = document.getElementById("cpf").value;
    var nmPassword = document.getElementById("password").value;

    //checando se há campos vazios
    if (nmNome == '' || nmEmail == '' || nmFone == '' || nmCpf == '' || nmPassword == '' ) {
        document.querySelector("#rederro").style.display = 'block'

        

        if (nmNome == '') {
            document.querySelector("#erronome").style.display = 'block' }
            else {
            document.querySelector("#erronome").style.display = 'none';
        }

        
        if (nmEmail == '') {
            document.querySelector("#erroemail").style.display = 'block' }
            else {
            document.querySelector("#erroemail").style.display = 'none';
        } 

        if (nmFone == '') {
            document.querySelector("#errofone").style.display = 'block' }
            else {
            document.querySelector("#errofone").style.display = 'none';
        } 

        if (nmCpf == '') {
            document.querySelector("#errocpf").style.display = 'block' }
            else {
            document.querySelector("#errocpf").style.display = 'none';
        } 

        if (nmPassword == '') {
            document.querySelector("#errosenha").style.display = 'block' }
            else {
            document.querySelector("#errosenha").style.display = 'none';
        } 

    } else {
        //campos sem erros - checagem forçada
        var nmNome = document.getElementById("nome");
        var nmEmail = document.getElementById("email");
        var nmFone = document.getElementById("fone");
        var nmCpf = document.getElementById("cpf");
        var nmPassword = document.getElementById("password")

        
    
        if (nmNome == '') {
            document.querySelector("#erronome").style.display = 'block' }
            else {
            document.querySelector("#erronome").style.display = 'none';
        }

        
        if (nmEmail == '') {
            document.querySelector("#erroemail").style.display = 'block' }
            else {
            document.querySelector("#erroemail").style.display = 'none';
        } 

        if (nmFone == '') {
            document.querySelector("#errofone").style.display = 'block' }
            else {
            document.querySelector("#errofone").style.display = 'none';
        } 

        if (nmCpf == '') {
            document.querySelector("#errocpf").style.display = 'block' }
            else {
            document.querySelector("#errocpf").style.display = 'none';
        } 

        if (nmPassword == '') {
            document.querySelector("#errosenha").style.display = 'block' }
            else {
            document.querySelector("#errosenha").style.display = 'none';
        } 
        

        //Se todas as condições acimas forem atendidasm "dados são enviados", mas no momento apenas valida e limpa.
        if (nmNome != 'Nome' && nmEmail != '' && nmFone != '' && nmCpf != 'CPF' && nmPassword != '') {
                document.querySelector("#green").style.display = 'block';
                document.querySelector("#rederro").style.display = 'none';
                
                document.getElementById('nome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('tel').value = '';
                document.getElementById('cpf').value = '';
                document.getElementById('password').value = '';
    
   
        }
    }
}
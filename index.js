const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal,vaga,indice){
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos ) \n'
        return textoFinal
    },'')
    alert(vagasEmTexto)
}
function novaVaga(){
    const nome = prompt('Informe o nome da vaga: ')
    const descriçao = prompt('Informe uma descrição da vaga: ')
    const dataLimite = prompt('Informe a data limite:')

    const confimaçao = confirm ('Deseja criar uma nova vaga com essas informações: ' +
    '\nNome: ' + nome + '\nDescrição: ' + descriçao + '\nData: ' + dataLimite)
    if(confimaçao){
        const novaVaga = {nome,descriçao,dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert('Vaga Criada!')
    }
}
function exibirVaga(){
    const indice = prompt('Informe o indice da vaga: ')
    if(indice >= vagas.length || indice < 0){
        alert('Indice inválido')
        return
    }
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal,candidato){
        return textoFinal + '\n - ' + candidato
    },'')
    alert('Vaga: ' + indice +
    '\nNome: ' + vaga.nome +
    '\nDescrição: ' + vaga.descriçao +
    '\nData Limite: ' + vaga.dataLimite +
    '\nQuantidade de candidatos: ' + vaga.candidatos.length +
    '\nCandidatos inscritos: ' + candidatosEmTexto)
}
function inscreverCandidato(){
    const candidato  = prompt('Nome do candidato: ')
    const indice = prompt('Informe o indice da vaga: ')
    const vaga = vagas[indice]

    const confirmaçao = confirm ('Deseja inscrever o candidato ' + candidato + ' na vaga ' + indice + ' ?' + '\nNome: ' + vaga.nome + '\nDescrição: ' + vaga.descriçao + '\nData limite: ' + vaga.dataLimite)
    if(confirmaçao){
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada!')
    }
}
function excluirVaga(){
    const indice = prompt('Informe o indice da vaga que deseja excluir: ')
    const vaga = vagas[indice]

    const confimaçao = confirm('Tem certeza que quer excluir a vaga: ' + indice + ' ?' + '\nNome: ' + vaga.nome + '\nDescrição: ' + vaga.descriçao + '\nData limite: ' + vaga.dataLimite)
    if(confimaçao){
        vagas.splice(indice, 1)
        alert('Vaga excluida!')
    }
}
function exibirMenu(){
    const opcao = prompt('Cadastro de vagas de emprego' + '\nEscolha uma das opções: \n1-Listar vagas: \n2-Cria nova vaga: \n3-Exibir uma vaga \n4-Inscrever um candidato: \n5-Excluir uma vaga \n6-Sair')
    return opcao
}
function executar(){
    let opcao = ''
    do{
        opcao = exibirMenu()
        switch(opcao){
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Saindo')
                break
            default:
                alert('opção inválida!')
        }
    }while(opcao!='6')
}
executar()
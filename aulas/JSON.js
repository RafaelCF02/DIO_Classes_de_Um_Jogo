//JSON - JavaScript Object Notation]
// Composto po CHAVE e VALOR com o objetivo de transferir dados

let invoice = {
    nome: "Rafael",
    idade: 21,
    Linguagens: ["Python","JavaScript"]
}

function ImpressãoOrganizada(invoice){
    console.log("O usuário é " + invoice.nome)
    console.log(`Sua idade é ${invoice.idade}`)
    console.log(`Possui conhecimento nas linguagens: ${invoice.Linguagens}`)
}

ImpressãoOrganizada(invoice)
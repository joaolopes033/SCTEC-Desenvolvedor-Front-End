var alunos = [
    { nome: 'João', turma: 301, nota: 10 },
    { nome: 'Kauã', turma: 201, nota: 8 },
    { nome: 'Manuele', turma: 302, nota: 3 },
    { nome: 'Ana', turma: 101, nota: 9 },
    { nome: 'Carlos', turma: 202, nota: 7 }
];

let novoArray = alunos.map(function (aluno) {

    if (aluno.nota >= 6) {
        aluno.aprovado = true;
    } else {
        aluno.aprovado = false;
    }

    return aluno;
});

console.log(novoArray);
alunos.forEach(aluno => {
    aluno.media = {}
    for(let materia in aluno.notas){
        aluno.media[materia] = average(...aluno.notas[materia])
    }
});

console.log(alunos)

const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(mapteria)
    return '<td>${materia}</td>'
}).join('')

console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader.innerHTML)

document.querySelector('[data-table-aluno] thead').appendChild(htmlHeader)



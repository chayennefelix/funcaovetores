nome=[]
nota=[]
media=0, n1=0, n2=0
resp="s"
while (resp=="s"){
    nomes.push(prompt("Digite o nome do aluno"))
    n1=parseFloat(prompt("Digite a primeira nota"))
    n2=parseFloat(prompt("Digite a segunda nota"))

   media=(n1+n2)/2
   media.push(media)
   resp=prompt("Deseja continuar? (S/N")
}
for (i=0, i<nomes.leght; i++; ){
    console.log(nomes[i]+""+ medias[i])
}

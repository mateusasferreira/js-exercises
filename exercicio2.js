// Teste 2
// Dado um array de strings não vazio, remove os dados duplicados em sequência.

// public String[] removeDuplicates(String[] values)
// Exemplo entrada
// removeDuplicates(new String[]{"g", "g", "y", "c", "c", "c", "q", "c", "y", "y"})
// Exemplo saída
// ["g", "y", "c", "q", "c", "y"]

function removeDuplicates(array){
    //armazena os valores que não se repetem em sequencia
    const uniqueValues = []

    for(i = 0; i < array.length; i++){
        
        //se for o primeiro item do array, automaticamente vai o array de valores únicos
        //para os próximos valores, verifica se é diferente do anterior, e só se for, vai o array de valores únicos
        if(i === 0 || (i > 0 && array[i] !== array[i -1])) uniqueValues.push(array[i])
    }
    
    return uniqueValues
}

console.log(removeDuplicates(["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"]))




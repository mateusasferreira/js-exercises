// Teste 3
// Dado um array de strings não vazio, retorna um array de booleans indicando se a string é ou não um palíndromo.

// public boolean[] verifyPalindromes(String[] values

// Exemplo entrada
// verifyPalindromes(new String[]{"arara", "jabuticaba", "asa", "caminhao"})
// Exemplo saída
// [true, false, true, false]

function verifyPalindromes(array){

    //verifica se cada palavra do array é palidrome ou não
    for(i = 0; i < array.length; i++) {
        //varaivel que vai substituir o valor no array
        let isPalindrome = true

        //verifica se as letras em posições opostas na palavra são as mesmas
        for(j = 0; j < array[i].length; j++){
            
            //caso as letras opostas sejam diferentes, atribuem false para a variavel de verificação
            if(array[i][j] !== array[i][array[i].length - 1 - j]) {
                isPalindrome = false
                break
            }
        }

        //substitui o valor no array
        array[i] = isPalindrome
    }

    return array
}

console.log(verifyPalindromes(["arara", "jabuticaba", "asa", "caminhao"]))
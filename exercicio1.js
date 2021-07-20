// Teste 1
// Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.

// public boolean isSubsequent(int[] values, int[] sequence)

// Exemplo entrada
// isSubsequent(new int[]{5, 1, 22, 25, 6, -1, 8, 10}, new int[]{1, 6, -1, 10})
// Exemplo saída
// true



function isSubsequent(array1, array2){
        
    
    //novo array que guardará os valores em comum entre os dois arrays
    var repeatedValues = []
  
    //"varre" o primeiro array , localiza os valores em comum com o segundo, e os inclue no array de valores repetidos"
    array1.forEach(value => {
      array2.forEach(item => {
        if(value === item) repeatedValues.push(value)
      })
    })
    
    //verifica se os valores repetidos, extraídos do primeiro array, estão mesma ordem no segundo array
    for(i = 0; i < repeatedValues.length; i++){
      //guarda o valor repetido no indice atual
      var currentValue = repeatedValues[i]
      //guarda o proximo valor repetido
      var nextValue = repeatedValues[i + 1]
      
      //guarda a posicao do valor repetido atual no segundo array
      var currentValuePosition
      //guarda a posicao do proximo valor repetido no segundo array
      var nextValuePosition
  
      for(j = 0; j < array2.length; j++){
        if(array2[j] === currentValue) currentValuePosition = j
      }
  
      for (k = 0; k < array2.length; k++){
        if(array2[k] === nextValue) nextValuePosition = k
      }
  
      //verifica se os valores não são subquentes no segundo array, e retorna false caso a condição seja satisfeita
      if(currentValuePosition > nextValuePosition) return false
    }
  
    //caso nenhum dos valores estejam repetidos
    return true
    
  }
  
  console.log(isSubsequent([3,4,5,6,2,74,213,35,45], [5,6,74,35,45]))
  
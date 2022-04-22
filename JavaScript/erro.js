//Diferente do return o throw retorna uma string como sendo um erro.
//Try...catch funciona com a verificação de um pedaço de codgo que pode ser tratado e manipulado da maneira personalizada
//O bloco try... catch também pode conter o argumento finally, que é uma instrução que sera chamada se houver um erro ou não

//Atividade pratica: Objetivo é receber uma array e retornar ele caso seu tamanho corresponda com o numero lançado como parametro da função, caso contrario um erro sera lançado

function validacao(arr, num){
    try{
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !=='Object') throw new TypeError('Array precisa ser do tipo object');
    
        if(typeof num !== 'number') throw new TypeError('Array precisa ser do tipo number');
    
        if(arr.length !==num) throw new RangeError('Tamanho invalido!');
        
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        }
        else if(e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log('Este erro é um RangerError')
            console.log(e.message)
        }
        else{
            console.log('Tipo de erro não esperado:' + e)
        }
    }

}




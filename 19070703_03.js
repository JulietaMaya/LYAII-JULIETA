var entrada = "Los obstaculos en la vida nos hacen madurar, los exitos nos hacen reflexionar, y los fracasos nos hacen crecer";
    const lex = str => 
    {
        return str.split(' ').map(item =>
             {
                return item.trim()
            }
        )
    }
    var lex1 = lex(entrada);
    console.log(lex1);

let frase2=entrada.split(" ");
console.log("Frase 2: ", frase2)

//PALABRA POR PALABRA 
console.log(frase2['0']);
console.log(frase2['1']);
console.log(frase2['2']);
console.log(frase2['3']);
console.log(frase2['4']);
console.log(frase2['5']);
console.log(frase2['6']);
console.log(frase2['7']);
console.log(frase2['8']);
console.log(frase2['9']);
console.log(frase2['10']);
console.log(frase2['11']);
console.log(frase2['12']);
console.log(frase2['13']);
console.log(frase2['14']);
console.log(frase2['15']);
console.log(frase2['16']);
console.log(frase2['17']);
console.log(frase2['18']);
console.log(frase2['19']);
console.log("Longitud de frase: ", frase2.length);
//Julieta Raquel Maya Oliva
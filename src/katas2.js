// comece a criar a sua função add na linha abaixo
function add(a, b) {
   return a + b;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
   let sum = 0;
   let aux = a;

   a = (a < 0) ? a = -a : a;

   for (let i = 1; i <= a; i++) {
      sum = add(sum, add(0, b));
   }

   sum = (aux < 0) ? sum = -sum : sum;

   sum = (sum == -0) ? 0 : sum;

   return sum;
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
   let potencia = 1;
   let aux = n;

   n = (n < 0) ? -n : n;

   for (let i = 1; i <= n; i++) {
      potencia = multiply(potencia, x);
   }

   
   potencia = (aux < 0) ? potencia = 1 / potencia : potencia;

   return potencia;
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n) {
   let fat = 1;

   if (n == 0) return 1;

   for (let i = 1; i <= n; i++) {
      fat = multiply(fat, i);
   }

   return fat;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
   let arrFib = [0, 1];
   
   for (let i = 2; i <= n - 1; i++) {
      arrFib[i] = add(arrFib[i-1], arrFib[i-2]);
   }

   return arrFib[n - 1];
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');

# ptbr
**ptbr** é uma biblioteca leve e simples, com funções comuns quando se trabalha com português brasileiro.
___
instalação: 

``
npm install ptbr
``
____
usando:
``
const ptbr = require('ptbr')
``

## Funções

### capitalize
``
ptbr.capitalize('olá'); // Olá
``

### capitalizeEveryWord
``
ptbr.capitalizeEveryWord('olá da ptbr'); //Olá Da Ptbr
``

também aceita um parâmetro opcional para ignorar preposições:

``
ptbr.capitalizeEveryWord('olá da ptbr', true); //Olá da Ptbr
``

### ehPreposicao
``
ptbr.ehPreposicao('da'); //true
``

### removeAcentos
``
ptbr.removeAcentos('olá da ptbr'); //ola da ptbr
``

### removeCedilha
``
ptbr.removeCedilha('caçar'); //cacar
``

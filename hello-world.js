var http = require('node:http');
// para usar o servidor e o cliente HTTP é necessario o require('node:http')
const hostname = '127.0.0.1';
// o hostname é local onde ficara armazenado o servidor o endereço
const port = 3000;
// aqui escolhemos a porta 3000 para especificar 
const server = http.createServer((req, res) => {
  // As funções de middleware são funções que têm acesso ao objeto de solicitação ( req),
  //  ao objeto de resposta ( res) e à próxima função de middleware no ciclo de
  //  solicitação-resposta do aplicativo.
// aqui está sendo criado o server
// req ( Request) = é a mensagem que mandamos ao servidor
// http.createServer([options][, requestListener])

  res.statusCode = 200;
  // controla o statuscode que será enviado para o cliente 
  res.setHeader('Content-Type', 'text/plain');
  // Define um único valor de cabeçalho. Caso o cabeçalho já exista nos cabeçalhos
  //  a serem enviados, seu valor será substituído. Use uma matriz de strings
  //  para enviar vários cabeçalhos com o mesmo nome.
  res.end('Hello, World!\n');
  // writable – se true , o valor pode ser alterado, caso contrário, é somente leitura .
  //  enumerable – se true , listado em loops, caso contrário, não listado. 
  // configurável – se true , a propriedade pode ser excluída e esses atributos
  //  podem ser modificados, caso contrário, não.

});

// listen significa ouvir ou escutar logo o server está sendo ouvido lido
// por isso ele recebe a port e o hostname
// é onde está armazenado as informações do servidor

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
# <h1>Construção de chat com react e nodejs

<img src="client/src/components/capa.png">

<h2>Descrição do projeto:<h2/>
<h3>Backend (Node.js com Express e Socket.IO)</h3>
<p>
  1.O backend é configurado em server.js, onde eu crio uma instância do servidor HTTP usando o Express.
  <br>  
  2.Configuro o Socket.IO para trabalhar com o servidor HTTP criado, definindo algumas opções, como a origem permitida para conexões.
  <br> 
  3.Quando um cliente se conecta (io.on('connection')), o servidor ouve o evento 'join' para receber o nome de usuário do cliente.
  <br> 
  4.O nome de usuário é associado ao socket do cliente e armazenado para referência futura.
  <br>   
  5.Quando um cliente se desconecta (socket.on('disconnect')), o servidor imprime uma mensagem indicando que o usuário foi desconectado.
  <br> 
  6.O servidor também ouve o evento 'message' e retransmite a mensagem recebida a todos os clientes conectados, incluindo o nome de usuário do remetente associado ao socket.
</p>

<h3>Frontend (React)</h3>
<p>
  1. O frontend possui duas principais partes: Join e Chat.
  <br>  
  2. Join é responsável por permitir que os usuários entrem no chat, fornecendo um campo de entrada para o nome de usuário e um botão para entrar.
  <br> 
  3. Quando o usuário clica no botão "Entrar", é estabelecida uma conexão Socket.IO com o servidor.
  <br> 
  4. O nome de usuário é enviado para o servidor através do evento 'join'.
  <br> 
  5. Se a operação for bem-sucedida, o estado chatVisibility é atualizado para exibir o componente Chat.
  <br> 
  6. Chat exibe as mensagens trocadas no chat em tempo real.
  <br> 
  7. As mensagens são exibidas em uma lista, onde cada mensagem mostra o texto, o autor e um timestamp.
  <br> 
  8. Os usuários podem enviar mensagens digitando no campo de entrada e clicando no botão "Enviar".
  <br> 
  9. As mensagens enviadas são emitidas para o servidor através do evento 'message' e retransmitidas a todos os clientes conectados.
</p>


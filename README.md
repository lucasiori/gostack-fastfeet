<h1 align="center">
  <image src="https://github.com/lucasiori/gostack-fastfeet/blob/master/.github/fastfeet.png" alt="FastFeet" width="500" />
</h1>

<h3 align="center">👞 FastFeet</h3>

<blockquote align="center">Aplicação final desenvolvida durante o Bootcamp GoStack</blockquote>

<p align="center">
  <a href="#sobre-aplicacao">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#comecando">Começando</a>&nbsp;&nbsp;&nbsp;
</p>

<br />

<h2 id="sobre-aplicacao">ℹ Sobre a aplicação</h2>
<p>A aplicação trata-se de um sistema de gerenciamento para transportadoras.</p>
<p>Na plataforma web, são cadastrados os entregadores, destinatário e encomendas. Também são listadas todas as encomendas cadastradas
e você pode consultar os detalhes, como produto, status e se a entrega teve/possui algum problema.</p>
<p>No aplicativo mobile, o usuário pode consultar o status da entrega e cadastrar problemas para a mesma, além de finalizar a entrega
enviando uma foto da assinatura do destinatário</p>

<br />

<h4>Documentações completas</h4>
<p>⚙ Backend: <a href="https://github.com/lucasiori/fastfeet-backend">FastFeet - Backend</a></p>
<p>💻 Frontend: <a href="https://github.com/lucasiori/fastfeet-frontend">FastFeet - Frontend</a></p>
<p>📱 Mobile: <a href="https://github.com/lucasiori/fastfeet-mobile">FastFeet - Mobile</a></p>

<br /> 

<h2 id="comecando">▶ Começando</h2>

<h3>⚙ Iniciando o Backend</h3>
<p>Antes de iniciar o serviço, é necessário configurar as variáveis ambientes no arquivo <code>.env</code>.</p>
<p>Todas as variáveis que precisam de configuração estão listadas no arquivo <code>.env.example</code>.</p>
<p><strong>OBS:</strong> Para uma melhor experiência ao usar o aplicativo mobile, não configure o endereço do backend como "localhost", use o IP.</p>
<p>Acesse a pasta do projeto e execute o seguinte comando para instalar as dependências necessárias para o projeto:</p>
<p><code>npm install</code></p>
<p>Agora, com todas as dependências instaladas, para iniciar o serviço execute o comando:</p>
<p><code>npm start</code></p>
<p>O serviço será executado na porta 3333.</p>
<p>Para iniciar o servidor de tarefas em background (envio de emails):</p>
<p><code>npm queue</code></p>

<h3>💻 Iniciando o Frontend</h3>
<p>Acesse a pasta do projeto frontend e execute o seguinte comando para instalar as dependências:</p>
<p><code>npm install</code></p>
<p>Com todas as depedências instaladas, execute o comando para iniciar a aplicação:</p>
<p><code>npm start</code></p>
<p>A aplicação será executada na porta 3000.</p>

<h3>📱 Iniciando o mobile (Android)</h3>
<p>Certifique-se de estar com o ambiente configurado. Você pode encontrar mais informações acessando
o link: <a href="https://docs.rocketseat.dev/ambiente-react-native/usb/android">Emulando Aplicativos via USB</a></p>
<p>Acesse a pasta do projeto e execute o comando <code>npm install</code> para instalar as dependências.</p>
<p>Você precisará informar o IP onde esta sendo executado o servidor backend, para isso acesse o arquivo localizado em 
 <code>src/services/api.js</code> e substitua <code>localhost</code> pelo IP do servidor.</p>
<p>Com todas as dependências instaladas e com o dispositivo conectado, execute o comando <code>react-native run-android</code>.
A inicialização pode demorar alguns minutos, aguarde.</p>

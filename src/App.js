import React from 'react';
import './App.css';

import Logo from "./img/Logopatinhas.png"; 

function App() {
  const animais = [
    {
      id: 1, nome: 'Luna', tipo: 'Gatinha',
      imagem: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      descricao: 'Dócil e brincalhona, adora um carinho.'
    },
    {
      id: 2, nome: 'Max', tipo: 'Cachorro',
      imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      descricao: 'Energético e leal, ama brincar na chuva.'
    },
    {
      id: 3, nome: 'Milo', tipo: 'Gatinho',
      imagem: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      descricao: 'Calmo e dorminhoco. Está sempre com fome.'
    }
  ];

  return (
    <div className="contentor-aplicacao">
      {/*Barra de Navegação*/}
      <nav className="barra-navegacao">
        <div className="logo">
          <span>Patinhas</span>
          <img 
            src={Logo}
            alt="Logótipo Patinhas" 
            title="Logo"
            className="imagem-logo" 
          />
        </div>

        <ul className="links-navegacao">
          <li>Adote</li>
          <li>Nossa Missão</li>
          <li>Contato</li>
        </ul>
      </nav>

      {/*Principal*/}
      <header className="seccao-banner">
        <div className="conteudo-banner">
          <h1>Encontre um amigo. <i>De verdade.</i></h1>
          <button className="botao-principal">Ver Animais</button>
        </div>
      </header>

      {/*Pets*/}
      <section className="seccao-animais">
        <div className="cabecalho-seccao">
          <h2>Prontos para ganhar um lar</h2>
          <p>Nossos cães e gatos estão esperando por uma família cheia de amor.</p>
        </div>
        
        <div className="grade-animais">
          {animais.map(animal => (
            <div className="cartao-animal" key={animal.id}>
              <div className="contentor-imagem">
                <img src={animal.imagem} alt={`Foto de ${animal.nome}`} />
              </div>
              <div className="info-animal">
                <h3>{animal.nome}</h3>
                <p className="tipo-animal">{animal.tipo}</p>
                <p className="descricao-animal">{animal.descricao}</p>
                <button className="botao-secundario">Quero Adotar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Saiba mais*/}
      <section className="seccao-missao">
        <div className="texto-missao">
          <p className="subtitulo">Nossa Filosofia</p>
          <h2>Conectando corações e resgatando vidas.</h2>
          <p>
            Acreditamos que todo animal merece uma segunda chance. Nosso objetivo é 
            reabilitar cães e gatos em situação de rua e encontrar tutores responsáveis. 
            Uma adoção consciente transforma não só a vida do animal, mas também a sua.
          </p>
          <button className="botao-principal" style={{marginTop: '20px'}}>Saiba Mais</button>
        </div>
        <div className="img-saiba-mais">
          <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="imagem saiba mais" title="Bichinhos na grama" />
        </div>
      </section>

      {/*Rodapé*/}
      <footer className="seccao-rodape">
        <div className="rodape-topo">
          <div className="coluna-rodape coluna-sobre">
            <h4>Nossa Missão</h4>
            <p>Trabalhamos diariamente para garantir que pets abandonados encontrem lares seguros e amorosos.</p>
          </div>
          <div className="coluna-rodape coluna-links">
            <ul>
              <li>Animais</li>
              <li>Como Adotar</li>
              <li>Doações</li>
            </ul>
            <ul>
              <li>Contato</li>
              <li>Voluntariado</li>
              <li>Sobre Nós</li>
            </ul>
          </div>
          <div className="coluna-rodape coluna-formulario">
            <h4>Junte-se à nossa família</h4>
            <p>Receba novidades sobre novos animais disponíveis e eventos de adoção.</p>
            <div className="formulario-boletim">
              <input type="email" placeholder="Seu email" />
              <button className="botao-principal">Inscrever-se</button>
            </div>
          </div>
        </div>
        <div className="rodape-fundo">
          <h1 className="logo-gigante">Patinhas</h1>
          <p>© 2026 Patinhas Adoção.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
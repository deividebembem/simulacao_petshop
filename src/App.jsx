import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Cuidado de verdade, pertinho de você</p>
            <h1 id="hero-title">O melhor amigo merece o <em>melhor cuidado.</em></h1>
            <p className="hero-description">
              Tudo para uma vida mais feliz ao lado do seu pet: carinho, qualidade e aquele atendimento que conhece vocês pelo nome.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#produtos">Explorar produtos <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#sobre">Conheça a Amigo Fiel</a>
            </div>
            <div className="hero-note"><span aria-hidden="true">✳</span> 10% de desconto na primeira compra ao se cadastrar</div>
          </div>
          <div className="hero-photo" role="img" aria-label="Cachorro feliz recebendo carinho" />
          <div className="hero-stamp"><span>amor em</span><strong>cada<br />patinha</strong><span aria-hidden="true">♡</span></div>
        </section>

        <section className="categories section-wrap" id="produtos" aria-labelledby="categories-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Um mundo feito para eles</p>
              <h2 id="categories-title">Encontre o que faz o rabinho abanar</h2>
            </div>
            <a className="text-link" href="#pedidos">Ver todos os produtos <span aria-hidden="true">→</span></a>
          </div>
          <div className="category-grid">
            <a className="category-item category-food" href="#pedidos">
              <span className="category-number">01</span><span className="category-icon" aria-hidden="true">✳</span>
              <h3>Alimentação</h3><p>Nutrição gostosa para cada fase da vida.</p><span className="category-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="category-item category-toys" href="#pedidos">
              <span className="category-number">02</span><span className="category-icon" aria-hidden="true">✿</span>
              <h3>Brinquedos</h3><p>Diversão para brincar junto e gastar energia.</p><span className="category-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="category-item category-care" href="#pedidos">
              <span className="category-number">03</span><span className="category-icon" aria-hidden="true">♡</span>
              <h3>Higiene & cuidado</h3><p>Bem-estar em todos os detalhes.</p><span className="category-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="welcome-band" id="sobre">
          <div className="welcome-inner">
            <p className="eyebrow">Petshop Amigo Fiel · Bahia</p>
            <h2>Mais que produtos.<br /><em>Uma parceria de carinho.</em></h2>
            <p>A gente acredita que cuidar de um pet é colecionar pequenos momentos felizes. Estamos aqui para acompanhar cada um deles.</p>
            <a className="button button-light" href="#cadastro">Venha fazer parte <span aria-hidden="true">↗</span></a>
          </div>
          <div className="welcome-image" role="img" aria-label="Pessoa passeando com seu cachorro" />
        </section>

        <section className="order-cta section-wrap" id="pedidos">
          <span className="order-icon" aria-hidden="true">♡</span>
          <div><p className="eyebrow">Do nosso cuidado para a sua casa</p><h2>Seu próximo pedido começa aqui.</h2></div>
          <a className="button button-primary" href="#cadastro">Fazer meu pedido <span aria-hidden="true">↗</span></a>
        </section>

        <section className="signup-strip" id="cadastro">
          <div><p className="eyebrow">Uma boa-vinda com presente</p><h2>Cadastre-se e ganhe 10% na primeira compra.</h2></div>
          <a className="button button-light" href="mailto:oi@amigofiel.com.br?subject=Quero%20me%20cadastrar">Quero meu desconto <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
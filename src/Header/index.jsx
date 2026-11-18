
import './style.css'


export default function Header() {
	return (
        <header className="site-header">
			<a className="brand" href="#inicio" aria-label="Amigo Fiel, página inicial">
				<span className="brand-mark" aria-hidden="true">✳</span>
				<span>amigo<span className="brand-light">fiel</span><small>PETSHOP</small></span>
			</a>
			<nav className="main-nav" aria-label="Navegação principal">
				<a href="#inicio" aria-current="page">Início</a>
				<a href="#produtos">Produtos</a>
				<a href="#sobre">Quem somos</a>
			</nav>
			<a className="header-cta" href="#cadastro">Entrar / Cadastrar <span aria-hidden="true">↗</span></a>
        </header>
    )
}
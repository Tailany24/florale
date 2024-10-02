import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importando GitHub e LinkedIn

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                {/* Ícones do GitHub e LinkedIn */}
                <a href="https://github.com/Tailany24" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {/* Ícone do GitHub */}
                </a>
                <a href="https://linkedin.com/in/tailany" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> {/* Ícone do LinkedIn */}
                </a>
            </div> 
            <div>
            <p>Desenvolvido por Tailany Mariano Leite</p>
            <p>© 2024 Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}



import Image from "next/image";

export default function Body() {
    return (
        <footer className="body">
            <header className="header">
                <div className="header-content" style={{  width: '100%', height: '500px' }}>
                    <Image
                    src="/img/flor.gif" // Caminho para a imagem
                    alt="florale"
                    layout="fill" // Faz com que a imagem preencha o contêiner
                    objectFit="cover" // Ajusta a imagem para cobrir o contêiner
                    />
                </div>
            </header>
            <main className="main-content">
                <div className="gif-container">
                    <Image 
                        src="/img/nossap.gif" // Caminho corrigido
                        alt="Nossa proposta" 
                        className="gif-img1" 
                        width={900} 
                        height={700} 
                    />
                </div>
                <div className="gif-container">
                    <Image 
                        src="/img/oqueo.gif" // Caminho corrigido
                        alt="O que oferecemos" 
                        className="gif-img2" 
                        width={900} 
                        height={700} 
                    />
                </div>
                <div className="gif-container">
                    <Image 
                        src='/img/comunicacaop.gif' // Caminho corrigido
                        alt="Comunicação e Parcerias" 
                        className="gif-img3" 
                        width={900} 
                        height={700}  
                    />
                </div>
            </main>
        </footer>
    );
}


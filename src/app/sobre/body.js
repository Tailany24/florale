import Image from 'next/image';

export default function Body() {
  return (
    <footer className="body">
      <header className="header">
      <div className="header-content" style={{  width: '100%', height: '500px' }}>
          <Image
            src="/img/sobrenos.gif" // Caminho para a imagem
            alt="sobre"
            layout="fill" // Faz com que a imagem preencha o contêiner
            objectFit="cover" // Ajusta a imagem para cobrir o contêiner
          />
        </div>
      </header>
      <main className="main-sobre">
        {/* Primeira linha de imagens */}
        <div className="image-sobre">
          <div className="imagei">
            <Image
              src="/img/visao.png" // Caminho para a imagem
              alt="Visão"
              className="image"
              width={600}
              height={400}
            />
          </div>
          <div className="imagei">
            <Image
              src="/img/misao.png" // Caminho para a imagem
              alt="Missão"
              className="image"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Segunda linha de imagens */}
        <div className="image-sobre">
          <div className="imagei">
            <Image
              src="/img/valores.png" // Caminho para a imagem
              alt="Valores"
              className="image"
              width={600}
              height={400}
            />
          </div>
          <div className="imagei">
            <Image
              src="/img/compromisso.png" // Caminho para a imagem
              alt="Compromisso"
              className="image"
              width={600}
              height={400}
            />
          </div>
        </div>
      </main>
    </footer>
  );
}

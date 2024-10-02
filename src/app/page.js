// src/page.js
import './globals.css';
import Navbar from './home/navbar';  // Verifique o nome e o caminho
import Body from './home/body';
import Footer from './home/footer';   // Verifique o nome e o caminho



export default function Home() {
    return (
        <div>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

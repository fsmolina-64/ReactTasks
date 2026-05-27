import './home.css';
import Gallery from '../../Components/Gallery/Gallery';

export function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <img 
          src="/portada react.png" 
          alt="Portada React" 
          className="home-logo"
        />
        <h1 className="home-title">
          Sistema de tareas
        </h1>
        <p className="home-subtitle">
          Bienvenido a la aplicación
        </p>
        
        <Gallery />

      </div>
    </main>
  );
}
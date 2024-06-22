import gambar1 from "./assets/foto1.jpg";
import gambar2 from "./assets/foto2.jpg";
import gambar3 from "./assets/foto3.jpg";
import './App.css';

function App() {
  return (
    <div id="root">
      <h1>Menu</h1>

      <div className="card-container">
        <div className="card">
          <img src={gambar1} alt="foto1" />
          <p>Soupe à l'Oignon</p>
        </div>

        <div className="card">
          <img src={gambar2} alt="foto2" />
          <p>Steik</p>
        </div>

        <div className="card">
          <img src={gambar3} alt="foto3" />
          <p>Pan-Seared Cod with Wasabi Sweet Potato Mash and Miso</p>
        </div>
      </div>
    </div>
  );
}

export default App;

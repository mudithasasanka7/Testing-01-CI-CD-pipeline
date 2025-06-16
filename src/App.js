// Removed: import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ backgroundColor: '#2E8B57', padding: '20px', color: 'white' }}>
        <h1>Welcome to Sri Lanka Tourism</h1>
        <p>Explore the Pearl of the Indian Ocean</p>
      </header>

      <section style={{ marginTop: '30px' }}>
        <h2>About Sri Lanka</h2>
        <p>
          Sri Lanka, a beautiful island nation in South Asia, is known for its golden beaches,
          ancient cities, lush rainforests, and warm hospitality. Whether you're looking for
          adventure, relaxation, or cultural exploration, Sri Lanka has something for everyone.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Top Tourist Attractions</h2>
        <ul>
          <li><strong>Sigiriya:</strong> Ancient rock fortress and UNESCO World Heritage site.</li>
          <li><strong>Ella:</strong> Hill country town famous for its scenic train rides and tea plantations.</li>
          <li><strong>Yala National Park:</strong> Wildlife sanctuary home to leopards, elephants, and more.</li>
          <li><strong>Galle Fort:</strong> Historic colonial fort with charming streets and ocean views.</li>
          <li><strong>Arugam Bay:</strong> Surfing hotspot with laid-back vibes.</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Travel Tips</h2>
        <ul>
          <li>The best time to visit is between December and April (West/South Coast).</li>
          <li>Respect cultural traditions and dress modestly when visiting temples.</li>
          <li>Try local dishes like Kottu, Hoppers, and Rice & Curry.</li>
          <li>Use tuk-tuks or trains for authentic travel experiences.</li>
        </ul>
      </section>

      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#eee' }}>
        <p>&copy; 2025 Sri Lanka Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

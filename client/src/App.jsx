import './css/style.css'
import { Navbar, Footer } from './components';

function App() {
  return (
    <div>
      <div className='container'>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './components/navigation/nav/Nav';
import Footer from './components/footer/Footer';
import BwPage from './pages/BwPage';
import DlwdPage from './pages/DlwdPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main-content">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookwyrm" element={<BwPage />} />
            <Route path="/dlwd" element={<DlwdPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

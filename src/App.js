import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home/Home";
import TvShows from './pages/TvShows/TvShows';
import BeautifulForm from "./pages/BeautifulForm/BeautifulForm";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tv-shows">TV Shows</Link></li>
        <li><Link to="/beautiful-form">Form</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/tv-show/:tvShowId" element={<TvShows />} />
        <Route path="/beautiful-form" element={<BeautifulForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

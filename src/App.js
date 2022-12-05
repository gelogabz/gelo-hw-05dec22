import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <nav>
        <Navbar />
        <div>
          <Routes>
            {/* <Route path='/gelo-first-react-app/' element={<Home />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      </nav>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
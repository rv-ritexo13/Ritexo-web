import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<Solutions />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<Industries />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Resources />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

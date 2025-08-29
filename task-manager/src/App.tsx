import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Halo, Saya Alvisyahputra 👋</h1>
      <p className="mt-2 text-lg">Belajar React dasar & membangun website portofolio.</p>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Tentang Saya</h1>
      <p className="mt-2">
        Saya sedang belajar pemrograman web dan membuat project sederhana untuk
        portofolio. Fokus di React & pengembangan website.
      </p>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <p className="mt-2">Berikut beberapa project yang saya kerjakan.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Kontak</h1>
      <p className="mt-2">Hubungi saya lewat Instagram @alvsyh._ atau email: alvisyahputra01@gmail.com</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white flex justify-center gap-6 shadow-md">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routing Halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { StaticRouter } from "react-router-dom/server";
import "./App.css";

function Home() {
  return (
    <div className="demo-page">
      <h3>Home Page</h3>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="demo-page">
      <h3>About Page</h3>
      <p>This is the About page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="demo-page">
      <h3>Contact Page</h3>
      <p>Contact us at example@gmail.com.</p>
    </div>
  );
}

function DemoLinks() {
  return (
    <>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="main-header">
        <h1>React Router Types</h1>
        <p>HashRouter, MemoryRouter and StaticRouter</p>
      </header>

      <section className="router-card">
        <h2>1. HashRouter</h2>
        <p>
          Uses the URL hash to navigate between pages.
        </p>

        <HashRouter>
          <DemoLinks />
        </HashRouter>

        <p className="example">
          Example: http://localhost:5173/#/about
        </p>
      </section>

      <section className="router-card">
        <h2>2. MemoryRouter</h2>
        <p>
          Stores navigation history in memory and does not
          change the browser address bar.
        </p>

        <MemoryRouter initialEntries={["/"]}>
          <DemoLinks />
        </MemoryRouter>

        <p className="example">
          Try the links above. The browser URL stays unchanged.
        </p>
      </section>

      <section className="router-card">
        <h2>3. StaticRouter</h2>
        <p>
          Renders content for a fixed location without
          interactive browser navigation.
        </p>

        <StaticRouter location="/about">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </StaticRouter>

        <p className="example">
          Fixed location: /about
        </p>
      </section>
    </div>
  );
}

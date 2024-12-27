```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>Home</h1>
      {location.pathname === '/' && <p>Welcome to the Home page!</p>}
      {/* Render other components based on location */}
    </div>
  );
}

function About() {
  return <div>About</div>;
}
```
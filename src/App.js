import Layout from "./Components/Layout/Layout";
import { Routes, Route } from 'react-router-dom';
import Homescreen from "./Pages/Homescreen/Homescreen";
import About from "./Pages/AboutScreen/About";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homescreen />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

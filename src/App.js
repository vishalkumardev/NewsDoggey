import Navbar from './component/Navbar';
import Newsitem from './component/Newsitem';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
      <Navbar title="NewsDoggey" />
      <LoadingBar
        height={2}
        color='#E3357B'
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<Newsitem key="general" country="in" category="general" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/business" element={<Newsitem key="business" country="in" category="business" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/entertainment" element={<Newsitem key="entertainment" country="in" category="entertainment" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/health" element={<Newsitem key="health" country="in" category="health" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/science" element={<Newsitem key="science" country="in" category="science" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/sports" element={<Newsitem key="sports" country="in" category="sports" setProgress={setProgress} title="NewsDoggey" />} />
        <Route path="/technology" element={<Newsitem key="technology" country="in" category="technology" setProgress={setProgress} title="NewsDoggey" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

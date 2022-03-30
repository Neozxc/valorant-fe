import './App.css'
import { Footer } from './components/Footer/Footer';
import { WhiteBlock } from './components/WhiteBlock/WhiteBlock';
import { BrowserRouter as Router, Switch, Route, Routes, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<WhiteBlock />} />
      </Routes>
    </Router>
  );
}

export default App;

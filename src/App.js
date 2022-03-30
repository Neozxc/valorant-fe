import './App.css'
import { Footer } from './components/Footer/Footer';
import { WhiteBlock } from './components/WhiteBlock/WhiteBlock';
import { BrowserRouter as Router, Switch, Route, Routes, Redirect } from "react-router-dom";
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { TeamComps } from './components/TeamComps/TeamComps';
import { Ranks } from './components/Ranks/Ranks';
import { Agents } from './components/Agents/Agents';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<WhiteBlock />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/teamcomps' element={<TeamComps />} />
            <Route path='/ranks' element={<Ranks />} />
            <Route path='/agents' element={<Agents />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

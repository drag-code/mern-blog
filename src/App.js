import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md pt-20 mx-auto">
        <Route exact path="/" component={Home}/>
        <Route path="/article/:name" component={Article}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={ArticleList}/>
      </div>
    </Router>
  );
}

export default App;

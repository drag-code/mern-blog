import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Navbar from "./components/Navbar";
import NotFound from "./pages/error/404";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="max-w-screen-md pt-20 mx-auto">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/article/:name" component={Article} />
					<Route path="/about" component={About} />
					<Route path="/articles" component={ArticleList} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

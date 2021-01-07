import BingoState from './context/BingoState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DarkHome from './pages/DarkHome';
import UnicornHome from './pages/UnicornHome';
import './App.css';

function App() {
	return (
		<Router>
			<BingoState>
				<div className='App'>
					<Switch>
						<Route exact path='/'>
							<Home linkTo='/darkBingo' />
						</Route>
						<Route exact path='/darkBingo'>
							<DarkHome linkTo='/unicornBingo' />
						</Route>
						<Route exact path='/unicornBingo'>
							<UnicornHome linkTo='/' />
						</Route>
					</Switch>
				</div>
			</BingoState>
		</Router>
	);
}

export default App;

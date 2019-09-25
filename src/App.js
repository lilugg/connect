import React from 'react';
import './App.css';
import { Route, BrowserRouter} from 'react-router-dom'
// import Home from './pages/home'
import SyncIndex from './utils/Sync'
let SyncRoute = SyncIndex(()=>import('./pages/home'))
function App() {
  return (
    <BrowserRouter>
		<div className="App">
			<Route path='/home' component={SyncRoute}/>	
		</div>
    </BrowserRouter>
    
  );
}

export default App;

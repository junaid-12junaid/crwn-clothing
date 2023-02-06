import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import {Switch, Route,Link } from 'react-router-dom';

const HatsPage=(props)=>{
  console.log(props)
 return( 
 <div>
    
    <h1>Hats Page</h1>
  </div>
 )
}

function App() {
  return (
    <div>
  
    <Switch>
     <Route  exact path='/' component={HomePage} />
     <Route   path='/shop' component={ShopPage} />
     </Switch>
    </div>
    
  );
}

export default App;

import { AuthProvider } from './contexts/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={()=>'Hola desde inicio!'}/>
          <Route path="/signup" component={ Signup } />
          <Route path="/login" component={ Login } />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

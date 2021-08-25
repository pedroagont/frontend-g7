import { AuthProvider } from './contexts/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={ Dashboard }/>
          <Route path="/signup" component={ Signup } />
          <Route path="/login" component={ Login } />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

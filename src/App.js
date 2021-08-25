import { AuthProvider } from './contexts/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={ Dashboard }/>
          <PrivateRoute exact path="/update-profile" component={ UpdateProfile }/>
          <Route path="/signup" component={ Signup } />
          <Route path="/login" component={ Login } />
          <Route path="/forgot-password" component={ ForgotPassword } />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

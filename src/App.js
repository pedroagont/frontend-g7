import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './contexts/PrivateRoute';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import ForgotPassword from './views/ForgotPassword';
import UpdateProfile from './views/UpdateProfile';
import Profile from './views/Profile';
import NewPost from './views/NewPost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={ Dashboard }/>
          <PrivateRoute exact path="/profile" component={ Profile }/>
          <PrivateRoute exact path="/update-profile" component={ UpdateProfile }/>
          <PrivateRoute exact path="/new-post" component={ NewPost }/>
          <Route path="/signup" component={ Signup } />
          <Route path="/login" component={ Login } />
          <Route path="/forgot-password" component={ ForgotPassword } />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

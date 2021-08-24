import { AuthProvider } from './contexts/authContext';
import Signup from './components/Signup';

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;

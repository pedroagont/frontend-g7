import { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/authContext';
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import MyPosts from '../components/MyPosts';

function Profile() {
  const { currentUser, logout } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState('');
  const history = useHistory();

  async function handleLogout(){
    try {
      setError('')
      setLoading(true)
      await logout();
      history.push('/login');
    } catch (e) {
      setError('Error al salir de sesión: ' + e.message)
      setLoading(false)
      console.log(e);
    }
  }

  return (
    !loading && <>
      <NavigationBar />
      <Card className="w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className="display-4 text-center my-3">Perfil</h1>
          { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
          <Card.Text className="lead text-center my-3">
            Email: { currentUser.email }
          </Card.Text>
          <Button as={ Link } to="/update-profile" className="w-100">
            Update Profile
          </Button>
          <Card.Text className="text-muted text-center my-3">
            <Link to="/login" onClick={ handleLogout }>Salir de sesión</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <MyPosts />
    </>
  );
}

export default Profile;

import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { firestoreDB } from '../firebase';
import NavigationBar from './NavigationBar';
import { useAuth } from '../contexts/authContext';

function PostForm() {
  const postTitle = useRef();
  const postContent = useRef();
  const postCategory = useRef();
  const formRef = useRef();

  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState('');

  const { currentUser } = useAuth();

  function handleReset() {
    formRef.current.reset();
  }

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      const inputValues = {
        title: postTitle.current.value,
        content: postContent.current.value,
        category: postCategory.current.value,
        createdAt: firestoreDB.getCurrentTimestamp(),
        createdBy: currentUser.uid
      }

      await firestoreDB.posts.add(inputValues)

      formRef.current.reset();

      setMessage('Post publicado!');
      setLoading(false);
    } catch (e) {
      setError('Error al crear post: ' + e.message)
      setLoading(false)
    }
  }

  return (
    <>
      <NavigationBar />
      <Card className="w-75 mx-auto mt-5">
        <Card.Body>
          <h1 className="display-4 text-center my-3">Nuevo Post</h1>
          { error && <Alert variant="danger">{ error }</Alert> }
          { message && <Alert variant="success">{ message }</Alert> }
          <Form onSubmit={ handleSubmit } ref={ formRef }>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control ref={ postTitle } type="text" placeholder="Escribe aquí el título" autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Contenido</Form.Label>
              <Form.Control ref={ postContent } as="textarea" rows={4} placeholder="Escribe aquí el contenido de tu post" autoComplete="off" required />
            </Form.Group>

            <Form.Select ref={ postCategory } className="mb-3" aria-label="Categoría" defaultValue="">
              <option value="">¿Cómo te sientes?</option>
              <option value="feliz">🥳 Feliz</option>
              <option value="enamorado">😍 Enamorado</option>
              <option value="hambriento">😋 Hambriento</option>
              <option value="cool">😎 Cool</option>
            </Form.Select>

            <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
              Publicar
            </Button>
            <Button onClick={handleReset } className="w-100 my-2" variant="secondary">
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default PostForm;

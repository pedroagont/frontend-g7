import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';

function PostForm() {
  const postTitle = useRef();
  const postContent = useRef();
  const postCategory = useRef();
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const postValues = {
      title: postTitle.current.value,
      content: postContent.current.value,
      category: postCategory.current.value,
      createdAt: new Date()
    }
    console.log(postValues);

    setMessage('Post publicado!');
    setLoading(false);
  }

  return (
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <h1 className="display-4 text-center my-3">Nuevo Post</h1>
        { error && <Alert variant="danger">{ error }</Alert> }
        { message && <Alert variant="success">{ message }</Alert> }
        <Form onSubmit={ handleSubmit }>
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
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PostForm;

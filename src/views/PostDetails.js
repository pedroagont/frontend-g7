import { useState, useEffect } from 'react'
import { Badge, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { firestoreDB } from '../firebase';
import NavigationBar from '../components/NavigationBar';

function PostDetails() {
  const [ currentPost, setCurrentPost ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams()

  async function fetchPostDetails() {
    setLoading(true)
    const doc = await firestoreDB.posts.doc(id).get()
    setCurrentPost(doc.data())
    setLoading(false)
  }

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const { title, content, category, createdAt } = currentPost;

  function renderCategory() {
    if (category === 'feliz') return '🥳 Feliz'
    if (category === 'enamorado') return '😍 Enamorado'
    if (category === 'hambriento') return '😋 Hambriento'
    if (category === 'cool') return '😎 Cool'
  }

  return (
    !loading && <>
      <NavigationBar />
      <Card className="w-75 mx-auto mt-5">
        <Card.Body>
          <Card.Title className="display-5 d-flex justify-content-between align-items-center">{ title } <Badge pill className="fs-6" bg="secondary">{ renderCategory() }</Badge></Card.Title>
          <Card.Text className="lead mt-4">{ content }</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted small">{ createdAt && createdAt.toDate().toString() }</Card.Footer>
      </Card>
    </>
  )
}

export default PostDetails

import React from 'react'
import { Badge, Card } from 'react-bootstrap';

function PostCard(props) {
  const { title, content, category, createdAt } = props;

  function renderCategory() {
    if (category === 'feliz') return '🥳 Feliz'
    if (category === 'enamorado') return '😍 Enamorado'
    if (category === 'hambriento') return '😋 Hambriento'
    if (category === 'cool') return '😎 Cool'
  }

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>{ title } <Badge pill bg="secondary">{ renderCategory() }</Badge></Card.Title>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted small">{ createdAt.toDate().toString() }</Card.Footer>
    </Card>
  )
}

export default PostCard

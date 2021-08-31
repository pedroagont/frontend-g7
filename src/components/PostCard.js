import React from 'react'
import { Card } from 'react-bootstrap';

function PostCard(props) {
  const { title, content, category } = props;

  function renderCategory() {
    if (category === 'feliz') return '🥳 Feliz'
    if (category === 'enamorado') return '😍 Enamorado'
    if (category === 'hambriento') return '😋 Hambriento'
    if (category === 'cool') return '😎 Cool'
  }

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted small">{ renderCategory() }</Card.Footer>
    </Card>
  )
}

export default PostCard

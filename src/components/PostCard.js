import React from 'react'
import { Button, Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function PostCard(props) {
  const { id, title, content, category, createdAt } = props;

  function renderCategory() {
    if (category === 'feliz') return '🥳 Feliz'
    if (category === 'enamorado') return '😍 Enamorado'
    if (category === 'hambriento') return '😋 Hambriento'
    if (category === 'cool') return '😎 Cool'
  }

  return (
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">{ title } <Badge pill bg="secondary">{ renderCategory() }</Badge></Card.Title>
        <Card.Text>{ content }</Card.Text>
        <Button className="w-100" size="sm" as={ Link } to={`/posts/${id}`}>Ver más →</Button>
      </Card.Body>
      <Card.Footer className="text-muted small">{ createdAt.toDate().toString() }</Card.Footer>
    </Card>
  )
}

export default PostCard

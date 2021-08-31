import { useState, useEffect } from 'react';
import { firestoreDB } from '../firebase';
import PostCard from './PostCard';

function PostList() {
  const [ currentPostList, setCurrentPostList ] = useState([]);

  async function fetchPosts() {
    const data = await firestoreDB.posts.orderBy('createdAt', 'desc').get()
    const allPosts = [];
    data.docs.forEach(doc => {
      const postElement = { id: doc.id, ...doc.data() }
      allPosts.push(postElement);
    })
    setCurrentPostList(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h3 className="display-4 text-center my-5">Lista de posts!</h3>
      {
        currentPostList.map(post => (
          <PostCard key={ post.id } id={ post.id } title={ post.title } content={ post.content } category={ post.category } createdAt={ post.createdAt }></PostCard>
        ))
      }
    </>
  )
}

export default PostList

import { useState, useEffect } from 'react';
import { firestoreDB } from '../firebase';
import PostCard from './PostCard';
import { useAuth } from '../contexts/authContext';

function MyPosts() {
  const [ currentPostList, setCurrentPostList ] = useState([]);
  const { currentUser } = useAuth();

  async function fetchPosts() {
    const data = await firestoreDB.posts.where('createdBy', '==', currentUser.uid).orderBy('createdAt', 'desc').get()
    const allPosts = [];
    data.docs.forEach(doc => {
      const postElement = { id: doc.id, ...doc.data() }
      allPosts.push(postElement);
    })
    setCurrentPostList(allPosts)
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    currentPostList.length !== 0 && <>
      <h3 className="display-4 text-center my-5">Mis posts!</h3>
      {
        currentPostList.map(post => (
          <PostCard key={ post.id } title={ post.title } content={ post.content } category={ post.category } createdAt={ post.createdAt }></PostCard>
        ))
      }
    </>
  )
}

export default MyPosts

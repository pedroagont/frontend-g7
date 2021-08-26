import NavigationBar from './NavigationBar';
import PostForm from './PostForm';

function Dashboard() {
  return (
    <>
      <NavigationBar />
      <h2 className="display-4 text-center my-5">Hola desde el dashboard! 🕹</h2>
      <PostForm />
    </>
  )
}

export default Dashboard

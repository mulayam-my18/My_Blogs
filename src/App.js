import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Header from './components/Header';
import CallButton from './components/CallButton';
import MoreBlogs from './components/MoreBlogs';
function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <div className="container py-4">
          <BlogPost />
          <MoreBlogs/>
        </div>
      </main>
      <Footer />
      <CallButton/>
    </div>
    </>
  );
}

export default App;

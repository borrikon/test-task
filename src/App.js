import Header from './components/header';
import Intro from './components/intro';
import Users from './components/users';
import PostForm from './components/postForm';

import './App.scss';


function App() {
  return (
    <div>
        <Header />
        <Intro />
        <Users />
        <PostForm />
    </div>
  );
}

export default App;

import Todo from './Todo';
import Modal from './Modal';
import Backdrop from './Backdrop';

function App() {
  return (
    <div>
      <h1>My Favorite Posts</h1>
          <Todo text='Learn React' />
          <Todo text='Use React' />
          <Modal />
          <Backdrop />
    </div>
  );
}

export default App;

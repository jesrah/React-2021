 import { useState } from 'react';
 import Modal from './Modal';
 import Backdrop from './Backdrop';

 function Todo(props) {
   //useState always returns an array w 2 ele
   //first element is the value false (initial value in useState)
   //second element is the function that allows you to change 'modalIsOpen'
   const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleDelete() {
        console.log('click!');
        setModalIsOpen(true);
    }

     return(
    <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onClick={handleDelete}>Delete</button>
    </div>
    {/* syntax for the next two lines mean the same thing (return <Component> if modalIsOpen is true)
    In JS, if the && operator evaluates to true for both, it returns the value of the second statement
     */}
    {modalIsOpen ? <Modal /> : null}
    {modalIsOpen && <Backdrop />}
  </div>
     );
 }

 export default Todo;
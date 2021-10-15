 function Todo(props) {

    function handleDelete() {
        console.log('click!');
    }

     return(
    <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onClick={handleDelete}>Delete</button>
    </div>
  </div>
     );
 }

 export default Todo;
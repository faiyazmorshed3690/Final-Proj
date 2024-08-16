import './styles/all-tasks.css';

const ulStyle = {
  border: "3px solid #ccc", // Softer border color
  borderRadius: "8px", // Rounded corners
  width: "90%", // Slightly smaller width for a more balanced look
  margin: "0 auto", // Added top margin for spacing
  padding: "0", // Removed padding to keep it compact
  overflow: "auto", // Prevents overflow issues
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
};

const liStyle = {
  padding: "8px 25px", // Increased padding for better spacing
  borderBottom: "2px solid #ccc", // Softer border color
  backgroundColor: "#333", // Dark gray background
  color: "#f1f1f1", // Light text color for contrast
  transition: "background-color 0.3s ease", // Smooth background transition
};

const liStyleLastChild = {
  ...liStyle,
  borderBottom: "none", // Remove the border from the last item
};

const liHoverStyle = {
  //backgroundColor: "#444", // Slightly lighter on hover
};



import { Link } from "react-router-dom";

function AllTasksView({ tasks, deleteTask }) {

  if (!tasks.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <Link to={`/tasks/new`}><button>Add Task</button></Link>
        <div>There are no tasks.</div>
      </>
    );
  }
  return (
    <div id="bgview" style={{display: "flex", flexDirection: "column", padding: "8px", minWidth: "500px"}} >
      <Link to={`/`}><button style={{margin: "8px"}}>Back to Home</button></Link>
      <Link to={`/tasks/new`}><button style={{margin: "8px"}}>Add Task</button></Link>
      <div style={ulStyle}>
        {tasks.map((todo, idx) => {
          let styleBool = idx === tasks.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={todo.id} style={styleBool}>
              <h4>Task #{idx+1}: <Link to={`/tasks/${todo.id}`}>{todo.content}</Link></h4>
              <h5>Assigned to: Employee {todo.employeeId}</h5>
              <h5>{todo.completed ? "COMPLETED" : "IN PROGRESS"}</h5>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default AllTasksView;
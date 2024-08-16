import './styles/all-tasks.css';

import { Link } from "react-router-dom";

//Styling for the list and list items
const ulStyle = {
  border: "5px solid white",
  width: "90%",
  margin: "0 auto",
  overflow: "auto",
};

const liStyle = {
  padding: "8px 16px",
  borderBottom: "3px solid white",
  backgroundColor: "black",
};

const liStyleLastChild = {
  ...liStyle,
  borderBottom: "none",
};



function AllEmployeesView({ employees, deleteEmployee }) {
  // Handle the case where employees might be undefined or an empty array
  if (!employees || employees.length === 0) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <Link to={`/employees/new`}><button>Add Employee</button></Link>
        <div>There are no employees.</div>
      </>
    );
  }

  return (
    <div id="bgview" style={{ display: "flex", flexDirection: "column", padding: "8px", minWidth: "500px" }}>
      <Link to={`/`}><button style={{ margin: "8px" }}>Back to Home</button></Link>
      <Link to={`/employees/new`}><button style={{ margin: "8px" }}>Add Employee</button></Link>
      <div style={ulStyle}>
        {employees.map((employee, idx) => {
          // Apply the last child styling conditionally
          const style = idx === employees.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={employee.id} style={style}>
              <h4>
                Employee #{idx + 1}: <Link to={`/employees/${employee.id}`}>
                  {employee.firstname} {employee.lastname}
                </Link>
              </h4>
              <h5>Department: {employee.department}</h5>
              <h5>
                {employee.tasks && employee.tasks.length > 0
                  ? `Assigned Tasks: ${employee.tasks.length}`
                  : "No tasks assigned"}
              </h5>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllEmployeesView;
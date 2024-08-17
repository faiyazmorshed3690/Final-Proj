// import { Link } from "react-router-dom";

// function EditEmployeeView({ employee, tasks, handleSubmit }) {
//     if (!employee) {
//         return (
//           <section>
//             <h2>Employee not found!</h2>
//           </section>
//         );
//     }

//     return (
//         <div>
//             <h3 style={{ textDecoration: "underline" }}>Edit Employee Information:</h3>
//             <form onSubmit={handleSubmit} id="editemployeeform">
//                 <label>First Name:
//                     <input name="firstname" defaultValue={employee.firstname} required />
//                 </label>
//                 <br/>
//                 <label>Last Name:
//                     <input name="lastname" defaultValue={employee.lastname} required />
//                 </label>
//                 <br/>
//                 <label>Department:
//                     <input name="department" defaultValue={employee.department} required />
//                 </label>
//                 <br/>
//                 <button>Save Employee</button>
//             </form>
//             <Link to={`../employees`}>Back to all employees</Link>
//         </div>
//     );
// }

// export default EditEmployeeView;
import { Link } from "react-router-dom";

function EditEmployeeView({ employee, tasks, handleSubmit }) {
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
    }

    return (
        <div>
            <h3 style={{ textDecoration: "underline" }}>Edit Employee Information:</h3>
            <form onSubmit={handleSubmit} id="editemployeeform">
                <label>First Name:
                    <input name="firstname" defaultValue={employee.firstname} required />
                </label>
                <br/>
                <label>Last Name:
                    <input name="lastname" defaultValue={employee.lastname} required />
                </label>
                <br/>
                <label>Department:
                    <input name="department" defaultValue={employee.department} required />
                </label>
                <br/>
                <button>Save Employee</button>
            </form>
            <h3>Assigned Tasks:</h3>
            <ul>
                {employee.tasks && employee.tasks.length > 0 ? (
                    employee.tasks.map(task => (
                        <li key={task.id}>
                            <Link to={`/tasks/${task.id}/edit`}>{task.content}</Link>
                            <button> <Link to = {`/tasks/`}> deleteTask</Link> </button>
                        </li>
                    ))
                ) : (
                    <p>No tasks assigned.</p>
                )}
            </ul>
            <br/>
            <Link to={`/tasks/new`}>Add a New Task</Link> {/* Add Task Link */}
            <br/>
            <h2><Link to={`../employees`}>Back to all employees</Link></h2>
        </div>
    );
}

export default EditEmployeeView;
//             <h3><Link to={`../employees`}>Back to all employees</Link></h3>        
//         </div>
//     );
// }

// export default EditEmployeeView;


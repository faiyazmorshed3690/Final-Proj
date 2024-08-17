// import React from 'react';
// import { Link } from 'react-router-dom';

// function SingleEmployeeView({ employee,tasks, handlesubmit }) {
//   if (!employee) {
//     return (
//       <section>
//         <h2>Employee not found!</h2>
//       </section>
//     );
//   }

//   return (
//     <section>
//       <article>
//         <h2>Name: {employee.firstname + " " + employee.lastname}</h2>
//         <p>Department: {employee.department}</p>
//         <h3>Assigned Tasks:</h3>
//         {employee.tasks && employee.tasks.length > 0 ? (
//           <ul>
//             {employee.tasks.map(task => (
//               <li key={task.id}>
//                 <Link to={`/tasks/${task.id}`}>{task.content}</Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No tasks assigned.</p>
//         )}
//        <Link to={`edit/`}><h3>Edit Employee information</h3></Link>
//        <h4><Link to="../employees">Back To All Employees.</Link></h4>
//       </article>
//     </section>
//   );
// }

// export default SingleEmployeeView;


import React from 'react';
import { Link } from 'react-router-dom';

function SingleEmployeeView({ employee, tasks, handleSubmit }) {
  if (!employee) {
    return (
      <section>
        <h2>Employee not found!</h2>
      </section>
    );
  }
const taskList = (
    employee.tasks.length ? 
      employee.tasks.map(task => (
        <Link key={task.id} to={`/tasks/${task.id}`}>
          {task.content}
        </Link>
      ))
     : (
      "No tasks assigned"
    )
  );
  
  return (
    <section>
      <article>
      <h4><Link to="../employees">Back To All Employees</Link></h4>

        <h2>Name: {employee.firstname + " " + employee.lastname}</h2>
        <p>Department: {employee.department}</p>
        <h3>Assigned Tasks:</h3>
        {taskList}
        <hr />
        <Link to={`edit`}><h3>Edit Employee Information</h3></Link>
      </article>
    </section>
  );
}

export default SingleEmployeeView;
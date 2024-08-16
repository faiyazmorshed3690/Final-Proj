import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer() {
  let { employeeId } = useParams(); // Get id from URL
  employeeId = parseInt(employeeId); // Convert to integer

  // Get employee from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(employee => employee.id === employeeId)
  );

  return <SingleEmployeeView employee={employee} />
}

export default SingleEmployeeContainer;
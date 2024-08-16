import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../store/employeesSlice';
import { useEffect } from "react";
import { fetchEmployees } from "../../store/employeesSlice";
import NewEmployeeView from '../views/NewEmployeeView';

function NewEmployeeContainer() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEmployee = {
      firstname: formData.get('firstName'),
      lastname: formData.get('lastName'),
      department: formData.get('department'),
    };
  
    // Dispatch the addEmployee action with the new employee data
    dispatch(addEmployee(newEmployee));
  
    // Optionally, reset the form after submission
    e.target.reset();
  };

  return <NewEmployeeView handleSubmit={handleSubmit} />;
}

export default NewEmployeeContainer;
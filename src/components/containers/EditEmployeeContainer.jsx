import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees, editEmployee } from '../../store/employeesSlice'; // Adjust the import path if necessary
import EditEmployeeView from '../views/EditEmployeeView'; // This should be EditEmployeeView, not EditEmployeeContainer

function EditEmployeeContainer() {
    let { employeeId } = useParams(); // Get ID from URL
    employeeId = parseInt(employeeId); // Convert to integer

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    // Get employee from state based on URL parameter
    const employee = useSelector(state =>
        state.employees.find(emp => emp.id === employeeId)
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Create the employee object and dispatch the `editEmployee` action
        const updates = {
            ...employee,
            firstname: formJson.firstname,
            lastname: formJson.lastname,
            department: formJson.department,
        };

        dispatch(editEmployee(updates));
        alert("Employee updated!");
    }

    return <EditEmployeeView employee={employee} handleSubmit={handleSubmit} />;
}

export default EditEmployeeContainer;
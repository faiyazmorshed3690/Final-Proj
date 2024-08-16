import { Link } from "react-router-dom";

function EditEmployeeView({ employee, handleSubmit }) {
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
            <Link to={`../employees`}>Back to all employees</Link>
        </div>
    );
}

export default EditEmployeeView;
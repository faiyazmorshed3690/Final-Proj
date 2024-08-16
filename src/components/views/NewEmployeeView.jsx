import { Link } from "react-router-dom";

function NewEmployeeView({ handleSubmit }) {
  return (
    <section>
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit} id="newemployeeform">
        <label>
          First Name: <input name="firstName" required />
        </label>
        <br />
        <label>
          Last Name: <input name="lastName" required />
        </label>
        <br />
        <label>
          Department: <input name="department" required />
        </label>
        <br />
        <button type="submit">Save Employee</button>
      </form>
      <br />
      <Link to={`/employees`}>
        <button style={{ margin: "8px" }}>Back to All Employees</button>
      </Link>
    </section>
  );
}

export default NewEmployeeView;
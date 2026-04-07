import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <h1 className="text-xl font-bold">Complaint System</h1>

      <div className="ml-auto flex gap-4">
        <Link to="/dashboard" className="btn btn-sm">Dashboard</Link>
        <button className="btn btn-sm btn-error" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
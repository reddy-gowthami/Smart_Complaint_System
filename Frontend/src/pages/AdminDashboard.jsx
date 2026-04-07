import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    API.get("/complaints")
      .then(res => setComplaints(res.data))
      .catch(err => console.error(err));
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/complaints/${id}`, { status });
    window.location.reload();
  };

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl mb-4">Admin Panel</h1>

        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>{c.title}</td>
                <td>{c.status}</td>
                <td>
                  <select
                    onChange={(e) =>
                      updateStatus(c.id, e.target.value)
                    }
                  >
                    <option>OPEN</option>
                    <option>IN_PROGRESS</option>
                    <option>RESOLVED</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
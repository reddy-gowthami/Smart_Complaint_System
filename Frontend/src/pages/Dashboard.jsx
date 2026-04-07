import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    API.get(`/complaints/user/${user.id}`)
      .then(res => setComplaints(res.data))
      .catch(err => console.error(err));
  }, []);

  const createComplaint = async () => {
    if (!title) return alert("Enter complaint");

    try {
      await API.post("/complaints", {
        title,
        userId: user.id
      });

      setTitle(""); // clear input
      window.location.reload(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <div>Please login</div>;

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl mb-4">My Complaints</h1>

        {/* 🔥 CREATE COMPLAINT */}
        <div className="card p-4 shadow mb-4">
          <h2 className="text-lg mb-2">Create Complaint</h2>

          <input
            type="text"
            placeholder="Enter complaint"
            className="input input-bordered mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-primary" onClick={createComplaint}>
            Submit
          </button>
        </div>

        {/* 🔥 LIST */}
        {complaints.map((c) => (
          <div key={c.id} className="card p-4 mb-2 shadow">
            <p className="font-semibold">{c.title}</p>
            <span className="badge mt-2">{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
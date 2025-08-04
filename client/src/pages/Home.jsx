import React, { useEffect, useState } from 'react';
import './Home.css';
import MiniPost from '../compo/MiniPost';
import NavBar from '../compo/NavBar';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    amount: ''
  });

  // Load jobs on first render
  useEffect(() => {
    fetch('mongodb+srv://yashrajkajale9:VFL8VxNTi6E2Jexg@cluster2.fddexvo.mongodb.net/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  // Handle submit for both add/edit
  const handleSubmit = (e) => {
    e.preventDefault();

    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `mongodb+srv://yashrajkajale9:VFL8VxNTi6E2Jexg@cluster2.fddexvo.mongodb.net/api/jobs/${editingId}`
      : 'mongodb+srv://yashrajkajale9:VFL8VxNTi6E2Jexg@cluster2.fddexvo.mongodb.net/';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    .then((res) => res.json())
    .then((data) => {
      if (editingId) {
        setJobs((prev) =>
          prev.map((job) => (job._id === editingId ? data : job))
        );
      } else {
        setJobs((prev) => [...prev, data]);
      }
      setForm({ title: '', description: '', amount: '' });
      setEditingId(null);
      setShowForm(false);
    })
    .catch((err) => console.error('Error saving job:', err));
  };

  const handleDelete = (id) => {
    fetch(`mongodb+srv://yashrajkajale9:VFL8VxNTi6E2Jexg@cluster2.fddexvo.mongodb.net/api/jobs/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setJobs((prev) => prev.filter((job) => job._id !== id));
    })
    .catch((err) => console.error('Error deleting job:', err));
  };

  const handleEdit = (job) => {
    setForm({
      title: job.title,
      description: job.description,
      amount: job.amount,
    });
    setEditingId(job._id);
    setShowForm(true);
  };

  return (
    <>
      <NavBar onAddClick={() => {
        setForm({ title: '', description: '', amount: '' });
        setEditingId(null);
        setShowForm(true);
      }} />

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="job-form">
            <h2>{editingId ? 'Edit Work' : 'Add Mini Work'}</h2>
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description and Location of work "
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Amount (₹)"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              required
            />
            <div className="form-actions">
              <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
              <button type="button" onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="cards-container">
        {jobs.map((job) => (
          <MiniPost
            key={job._id}
            title={job.title}
            description={job.description}
            amount={job.amount}
            onDelete={() => handleDelete(job._id)}
            onEdit={() => handleEdit(job)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

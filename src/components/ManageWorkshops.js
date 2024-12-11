import React, { useState, useEffect } from 'react';
import './ManageWorkshops.css';

const ManageWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [newWorkshop, setNewWorkshop] = useState({ title: '', description: '', date: '', location: '' });
  const [editWorkshop, setEditWorkshop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/workshops');
        const data = await response.json();
        setWorkshops(data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  const handleAddWorkshop = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/workshops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWorkshop),
      });

      if (response.ok) {
        const createdWorkshop = await response.json();
        setWorkshops([...workshops, createdWorkshop]);
        setNewWorkshop({ title: '', description: '', date: '', location: '' });
        setShowAddForm(false);
        setShowOptions(true);
      } else {
        console.error('Failed to add workshop');
      }
    } catch (error) {
      console.error('Error adding workshop:', error);
    }
  };

  const handleDeleteWorkshop = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workshop? This action cannot be undone."
    );
  
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`http://localhost:8080/api/workshops/${id}`, { method: 'DELETE' });
  
      if (response.ok) {
        setWorkshops(workshops.filter((workshop) => workshop.id !== id));
        alert("Workshop deleted successfully.");
      } else {
        console.error('Failed to delete workshop');
        alert("Failed to delete the workshop. Please try again.");
      }
    } catch (error) {
      console.error('Error deleting workshop:', error);
      alert("An error occurred while deleting the workshop.");
    }
  };
  
  const handleUpdateWorkshop = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/workshops/${editWorkshop.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editWorkshop),
      });

      if (response.ok) {
        const updatedWorkshop = await response.json();
        setWorkshops(
          workshops.map((workshop) =>
            workshop.id === updatedWorkshop.id ? updatedWorkshop : workshop
          )
        );
        setEditWorkshop(null);
        setShowOptions(true);
      } else {
        console.error('Failed to update workshop');
      }
    } catch (error) {
      console.error('Error updating workshop:', error);
    }
  };

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedWorkshops = [...filteredWorkshops].sort((a, b) => {
    if (sortOption === 'date') return new Date(a.date) - new Date(b.date);
    if (sortOption === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  const paginatedWorkshops = sortedWorkshops.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const displayWorkshops = showAll ? sortedWorkshops : paginatedWorkshops;

  return (
    <div className="manage-workshops-container">
      <h2>Manage Workshops</h2>

      {(showAddForm || showEditForm) && (
        <div className="add-workshop-form">
          <h3>{showEditForm ? 'Edit Workshop' : 'Add New Workshop'}</h3>
          <input
            type="text"
            placeholder="Title"
            value={editWorkshop ? editWorkshop.title : newWorkshop.title}
            onChange={(e) =>
              showEditForm
                ? setEditWorkshop({ ...editWorkshop, title: e.target.value })
                : setNewWorkshop({ ...newWorkshop, title: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={editWorkshop ? editWorkshop.description : newWorkshop.description}
            onChange={(e) =>
              showEditForm
                ? setEditWorkshop({ ...editWorkshop, description: e.target.value })
                : setNewWorkshop({ ...newWorkshop, description: e.target.value })
            }
          />
          <input
            type="date"
            value={editWorkshop ? editWorkshop.date : newWorkshop.date}
            onChange={(e) =>
              showEditForm
                ? setEditWorkshop({ ...editWorkshop, date: e.target.value })
                : setNewWorkshop({ ...newWorkshop, date: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Location"
            value={editWorkshop ? editWorkshop.location : newWorkshop.location}
            onChange={(e) =>
              showEditForm
                ? setEditWorkshop({ ...editWorkshop, location: e.target.value })
                : setNewWorkshop({ ...newWorkshop, location: e.target.value })
            }
          />
          <button onClick={showEditForm ? handleUpdateWorkshop : handleAddWorkshop}>
            {showEditForm ? 'Update Workshop' : 'Add Workshop'}
          </button>
          <button
            onClick={() => {
              setShowAddForm(false);
              setShowEditForm(false);
              setShowOptions(true);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="workshop-list">
        <h3>Existing Workshops</h3>
        {displayWorkshops.length > 0 ? (
          displayWorkshops.map((workshop) => (
            <div key={workshop.id} className="workshop-item">
              <h4>{workshop.title}</h4>
              <p>{workshop.description}</p>
              <p>
                {workshop.date} | {workshop.location}
              </p>
              <button
                onClick={() => {
                  setEditWorkshop(workshop);
                  setShowOptions(false);
                  setShowEditForm(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDeleteWorkshop(workshop.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No workshops found.</p>
        )}
      </div>

      {showOptions && (
        <div>
          <button
            onClick={() => {
              setShowOptions(false);
              setShowAddForm(true);
            }}
          >
            Add New Workshop
          </button>
          <button
            onClick={() => {
              setShowOptions(false);
              setShowEditForm(true);
            }}
          >
            Edit Existing Workshop
          </button>
          <button onClick={() => setShowOptions(false)}>Delete Workshop</button>
        </div>
      )}
      
    </div>
  );
};

export default ManageWorkshops;

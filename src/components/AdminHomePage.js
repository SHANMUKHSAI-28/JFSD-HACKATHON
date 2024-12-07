import React, { useState, useEffect } from 'react';
import { ViewAllStudents } from './ViewAllStudents';
import ViewAllJobsPage from './ViewAllJobsPage';
import PostJobPage from './PostJobPage';
import AddEmployerPage from './AddEmployerPage';
import ViewAllEmployers from './ViewAllEmployers';
import AdminAddStudentPage from './AdminAddStudentPage'; // Import the Add Student Page
import { useNavigate } from 'react-router-dom'; // For navigation
import './AdminHomePage.css'; // Optional: Custom styling

function Navbar({
  onViewStudentsClick,
  onViewJobsClick,
  onPostJobClick,
  onAddEmployerClick,
  onViewEmployersClick,
  onAddStudentClick,
  onLogoutClick
}) {
  return (
    <nav>
      <ul>
        <li><a href="#students" onClick={onViewStudentsClick}>View All Students</a></li>
        <li><a href="#jobs" onClick={onViewJobsClick}>View All Jobs</a></li>
        <li><a href="#post-job" onClick={onPostJobClick}>Post a Job</a></li>
        <li><a href="#add-employer" onClick={onAddEmployerClick}>Add Employer</a></li>
        <li><a href="#add-student" onClick={onAddStudentClick}>Add Student</a></li>
        <li><a href="#view-employers" onClick={onViewEmployersClick}>View All Employers</a></li>
        <li><a href="#logout" onClick={onLogoutClick}>Logout</a></li> {/* Logout Button */}
      </ul>
    </nav>
  );
}

export function AdminHomePage() {
  const [view, setView] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) setUsername(user);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate('/'); // Navigate to home page
  };

  const handleViewStudentsClick = () => setView('students');
  const handleViewJobsClick = () => setView('jobs');
  const handlePostJobClick = () => setView('postJob');
  const handleAddEmployerClick = () => setView('addEmployer');
  const handleViewEmployersClick = () => setView('viewEmployers');
  const handleAddStudentClick = () => setView('addStudent'); // Set view to Add Student

  return (
    <div className="admin-home">
      <div className="sidebar">
        <h2 className="logo">Job Portal</h2>
        <Navbar
          onViewStudentsClick={handleViewStudentsClick}
          onViewJobsClick={handleViewJobsClick}
          onPostJobClick={handlePostJobClick}
          onAddEmployerClick={handleAddEmployerClick}
          onViewEmployersClick={handleViewEmployersClick}
          onAddStudentClick={handleAddStudentClick}
          onLogoutClick={handleLogout} // Pass logout handler
        />
      </div>
      <div className="main-content">
        <h2 className="header">Admin Home Page</h2>
        <p>Welcome {username ? username : 'Admin'}!</p>

        {view === 'students' && <ViewAllStudents />}
        {view === 'jobs' && <ViewAllJobsPage />}
        {view === 'postJob' && <PostJobPage />}
        {view === 'addEmployer' && <AddEmployerPage />}
        {view === 'viewEmployers' && <ViewAllEmployers />}
        {view === 'addStudent' && <AdminAddStudentPage />}
      </div>
    </div>
  );
}

export default AdminHomePage;

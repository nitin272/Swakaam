import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
// Freelancer Pages
import DashboardPage from './pages/DashboardPage';
import FreelancerProfilePage from './pages/FreelancerProfilePage';
import ProjectMatchesPage from './pages/ProjectMatchesPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import ResourcesPage from './pages/ResourcesPage';
import ScreeningTestPage from './pages/ScreeningTestPage';
import LearningPathPage from './pages/LearningPathPage';
import SetupWorkspacePage from './pages/SetupWorkspacePage';
// Company Pages
import CompanyDashboardPage from './pages/company/DashboardPage';
import CompanyTalentPage from './pages/company/TalentPoolPage';
import CompanyProjectsPage from './pages/company/ProjectsPage';
import CompanyMessagesPage from './pages/company/MessagesPage';
import CompanyNotificationsPage from './pages/company/NotificationsPage';
import CompanyProfilePage from './pages/company/ProfilePage';

// Admin Pages
import AdminDashboardPage from './pages/admin/DashboardPage';
import AdminUsersPage from './pages/admin/UsersPage';
import AdminProjectsPage from './pages/admin/ProjectsPage';
import AdminCompaniesPage from './pages/admin/CompaniesPage';
import AdminSkillsPage from './pages/admin/SkillsPage';
import AdminAnalyticsPage from './pages/admin/AnalyticsPage';
import AdminSettingsPage from './pages/admin/SettingsPage';

// Common Pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  // In a real app, this would come from your auth context/state management
  const [userRole, setUserRole] = useState('company');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Protected Route Wrapper
  const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
      return <Navigate to="/dashboard" replace />;
    }

    return (
      <MainLayout userRole={userRole}>
        {children}
      </MainLayout>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Freelancer Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <FreelancerProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/matches" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <ProjectMatchesPage />
          </ProtectedRoute>
        } />
        <Route path="/messages" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <MessagesPage />
          </ProtectedRoute>
        } />
        <Route path="/notifications" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <NotificationsPage />
          </ProtectedRoute>
        } />
        <Route path="/resources" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <ResourcesPage />
          </ProtectedRoute>
        } />
        <Route path="/screening" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <ScreeningTestPage />
          </ProtectedRoute>
        } />
        <Route path="/learning" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <LearningPathPage />
          </ProtectedRoute>
        } />
        <Route path="/setup-workspace" element={
          <ProtectedRoute allowedRoles={['freelancer']}>
            <SetupWorkspacePage />
          </ProtectedRoute>
        } />

        {/* Company Routes */}
        <Route path="/company/dashboard" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyDashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/company/talent" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyTalentPage />
          </ProtectedRoute>
        } />
        <Route path="/company/projects" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyProjectsPage />
          </ProtectedRoute>
        } />
        <Route path="/company/messages" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyMessagesPage />
          </ProtectedRoute>
        } />
        <Route path="/company/notifications" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyNotificationsPage />
          </ProtectedRoute>
        } />
        <Route path="/company/profile" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyProfilePage />
          </ProtectedRoute>
        } />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminUsersPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/projects" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProjectsPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/companies" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminCompaniesPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/skills" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSkillsPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/analytics" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminAnalyticsPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/settings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSettingsPage />
          </ProtectedRoute>
        } />

        {/* Common Protected Routes */}
        <Route path="/settings" element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
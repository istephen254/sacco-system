// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import MembersPage from "../pages/members/MembersPage";
import LoansPage from "../pages/loans/LoansPage";
import SavingsPage from "../pages/savings/SavingsPage";
import TransactionsPage from "../pages/transactions/TransactionsPage";
import ReportsPage from "../pages/reports/ReportsPage";
import RolesPage from "../pages/settings/RolesPage";
import UsersPage from "../pages/settings/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "manager", "teller", "member"]}
            >
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />

          {/* Members */}
          <Route
            path="members"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "manager", "teller"]}
              >
                <MembersPage />
              </ProtectedRoute>
            }
          />

          {/* Loans */}
          <Route
            path="loans"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "manager", "teller"]}
              >
                <LoansPage />
              </ProtectedRoute>
            }
          />

          {/* Savings */}
          <Route
            path="savings"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "manager", "teller", "member"]}
              >
                <SavingsPage />
              </ProtectedRoute>
            }
          />

          {/* Transactions */}
          <Route
            path="transactions"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "manager", "teller"]}
              >
                <TransactionsPage />
              </ProtectedRoute>
            }
          />

          {/* Reports */}
          <Route
            path="reports"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "manager"]}
              >
                <ReportsPage />
              </ProtectedRoute>
            }
          />

          {/* Users */}
          <Route
            path="users"
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
              >
                <UsersPage />
              </ProtectedRoute>
            }
          />

          {/* Roles */}
          <Route
            path="roles"
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
              >
                <RolesPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}
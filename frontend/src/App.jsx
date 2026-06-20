import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Loans from "./pages/Loans";
import Savings from "./pages/Savings";
import Reports from "./pages/Reports";
import Users from "./pages/Users";

import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>

      {/* PUBLIC LANDING PAGE */}
      <Route path="/" element={<Home />} />

      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED DASHBOARD LAYOUT */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={[
              "admin",
              "manager",
              "teller",
              "loan_officer",
              "member",
            ]}
          >
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/reports" element={<Reports />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Users />
            </ProtectedRoute>
          }
        />

      </Route>

    </Routes>
  );
}

export default App;
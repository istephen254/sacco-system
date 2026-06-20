import { Link } from "react-router-dom";

export default function Sidebar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const menus = {
    admin: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Members", path: "/members" },
      { name: "Loans", path: "/loans" },
      { name: "Savings", path: "/savings" },
      { name: "Reports", path: "/reports" },
      { name: "Users", path: "/users" },
      { name: "Settings", path: "/settings" },
    ],

    manager: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Members", path: "/members" },
      { name: "Loans", path: "/loans" },
      { name: "Savings", path: "/savings" },
      { name: "Reports", path: "/reports" },
    ],

    teller: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Members", path: "/members" },
      { name: "Deposits", path: "/savings" },
      { name: "Withdrawals", path: "/savings" },
    ],

    loan_officer: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Loan Applications", path: "/loans" },
      { name: "Loan Approvals", path: "/loans" },
    ],

    member: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "My Savings", path: "/savings" },
      { name: "My Loans", path: "/loans" },
    ],
  };

  const roleMenus =
    menus[user?.role] || [];

  return (
    <aside className="sidebar">

      <h3>MENU</h3>

      <ul>

        {roleMenus.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}

      </ul>

    </aside>
  );
}
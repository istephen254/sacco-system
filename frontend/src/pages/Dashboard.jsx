export default function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div>

      <div className="page-header">

        <h1>
          Welcome,
          {" "}
          {user?.fullname}
        </h1>

        <p>
          SACCO Management Dashboard
        </p>

      </div>

      <div className="cards-grid">

        <div className="card">
          <h3>Total Members</h3>
          <h2>1,250</h2>
        </div>

        <div className="card">
          <h3>Total Savings</h3>
          <h2>KES 15.2M</h2>
        </div>

        <div className="card">
          <h3>Active Loans</h3>
          <h2>KES 8.7M</h2>
        </div>

        <div className="card">
          <h3>Monthly Income</h3>
          <h2>KES 420K</h2>
        </div>

      </div>

      <div className="dashboard-section">

        <h2>Recent Activities</h2>

        <table>

          <thead>
            <tr>
              <th>Member</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>John Mwangi</td>
              <td>Deposit</td>
              <td>KES 5,000</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>Mary Wanjiku</td>
              <td>Loan</td>
              <td>KES 50,000</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>James Kamau</td>
              <td>Withdrawal</td>
              <td>KES 2,000</td>
              <td>Today</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
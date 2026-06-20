export default function Users() {
  return (
    <div>

      <div className="page-header">
        <h1>System Users</h1>
      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>System Admin</td>
            <td>admin@sacco.com</td>
            <td>Admin</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Main Teller</td>
            <td>teller@sacco.com</td>
            <td>Teller</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Branch Manager</td>
            <td>manager@sacco.com</td>
            <td>Manager</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}
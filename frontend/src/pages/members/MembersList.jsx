import { useEffect, useState } from "react";
import API from "../../api/memberApi";

function MembersList() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await API.get("/members");
    setMembers(res.data);
  };

  return (
    <div>

      <h2>Members List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>No</th>
            <th>Member No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>{member.member_number}</td>
              <td>
                {member.first_name} {member.last_name}
              </td>
              <td>{member.phone}</td>
              <td>{member.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default MembersList;
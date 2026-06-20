import { useEffect, useState } from "react";
import { getMembers } from "../services/memberService";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const data = await getMembers();
      setMembers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <div className="page-header">
        <h1>Members</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Member No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.member_no}</td>
                <td>{member.fullname}</td>
                <td>{member.phone}</td>
                <td>{member.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No Members Found
              </td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
  );
}
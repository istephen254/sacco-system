import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/memberApi";

function MemberProfile() {

  const { id } = useParams();

  const [member, setMember] = useState(null);

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = async () => {
    const res = await API.get(`/members/${id}`);
    setMember(res.data);
  };

  if (!member) return <p>Loading...</p>;

  return (
    <div>

      <h2>Member Profile</h2>

      <p>Member No: {member.member_number}</p>

      <p>
        Name:
        {member.first_name} {member.last_name}
      </p>

      <p>Phone: {member.phone}</p>

      <p>Email: {member.email}</p>

      <p>Status: {member.status}</p>

    </div>
  );
}

export default MemberProfile;
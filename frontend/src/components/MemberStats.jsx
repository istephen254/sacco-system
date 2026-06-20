import { useEffect, useState } from "react";
import API from "../api/memberApi";

function MemberStats() {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const res = await API.get("/members/stats");
    setStats(res.data);
  };

  if (!stats) return null;

  return (
    <div className="stats-grid">

      <div className="card">
        <h3>Total Members</h3>
        <h1>{stats.totalMembers}</h1>
      </div>

      <div className="card">
        <h3>Active Members</h3>
        <h1>{stats.activeMembers}</h1>
      </div>

      <div className="card">
        <h3>Inactive Members</h3>
        <h1>{stats.inactiveMembers}</h1>
      </div>

    </div>
  );
}

export default MemberStats;
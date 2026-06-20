import { useEffect, useState } from "react";
import { getSavings } from "../services/savingsService";

export default function Savings() {
  const [savings, setSavings] =
    useState([]);

  useEffect(() => {
    loadSavings();
  }, []);

  const loadSavings = async () => {
    try {
      const data = await getSavings();
      setSavings(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <div className="page-header">
        <h1>Savings</h1>
      </div>

      <table>

        <thead>
          <tr>
            <th>Member</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {savings.map((saving) => (
            <tr key={saving.id}>
              <td>{saving.member_name}</td>
              <td>{saving.amount}</td>
              <td>{saving.date}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
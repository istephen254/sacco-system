import { useEffect, useState } from "react";
import { getLoans } from "../services/loanService";

export default function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    try {
      const data = await getLoans();
      setLoans(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <div className="page-header">
        <h1>Loans</h1>
      </div>

      <table>

        <thead>
          <tr>
            <th>Loan No</th>
            <th>Member</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.loan_no}</td>
              <td>{loan.member_name}</td>
              <td>{loan.amount}</td>
              <td>{loan.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
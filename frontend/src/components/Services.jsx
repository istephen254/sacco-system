import { FaPiggyBank, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";

export default function Services() {
  return (
    <div className="grid" id="services">
      <div className="card">
        <FaPiggyBank size={30} />
        <h3>Savings</h3>
        <p>Grow your savings securely with high returns.</p>
      </div>

      <div className="card">
        <FaHandHoldingUsd size={30} />
        <h3>Loans</h3>
        <p>Affordable loans with flexible repayment.</p>
      </div>

      <div className="card">
        <FaChartLine size={30} />
        <h3>Investments</h3>
        <p>Smart investment opportunities for members.</p>
      </div>
    </div>
  );
}
import {
  FaPiggyBank,
  FaHandHoldingUsd,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaCarSide,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <div className="section-heading">
        <h2>Our Services</h2>
        <p>Everything you need to save, borrow, and grow — in one place.</p>
      </div>

      <div className="grid">
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

        <div className="card">
          <FaShieldAlt size={30} />
          <h3>Insurance &amp; Welfare</h3>
          <p>Protection cover and welfare support for you and your family.</p>
        </div>

        <div className="card">
          <FaMobileAlt size={30} />
          <h3>Mobile Banking</h3>
          <p>Check balances, save, and repay loans right from your phone.</p>
        </div>

        <div className="card">
          <FaCarSide size={30} />
          <h3>Asset Financing</h3>
          <p>Own a car, equipment, or property with manageable terms.</p>
        </div>
      </div>
    </section>
  );
}
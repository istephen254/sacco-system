import "../styles/products.css";

function Products() {
  const products = [
    {
      title: "Ordinary Savings Account",
      description:
        "Build your savings steadily and earn attractive annual dividends.",
      icon: "💰",
    },
    {
      title: "Fixed Deposit Account",
      description:
        "Invest your funds securely and enjoy competitive interest rates.",
      icon: "🏦",
    },
    {
      title: "Development Loan",
      description:
        "Finance personal projects, construction, business expansion and investments.",
      icon: "🏗️",
    },
    {
      title: "Emergency Loan",
      description:
        "Quick financial support for urgent and unexpected needs.",
      icon: "🚑",
    },
    {
      title: "School Fees Loan",
      description:
        "Ensure uninterrupted education with affordable school fees financing.",
      icon: "🎓",
    },
    {
      title: "Asset Financing",
      description:
        "Acquire vehicles, equipment and other productive assets with ease.",
      icon: "🚗",
    },
  ];

  return (
    <div className="products-page">
      {/* HERO */}
      <section className="products-hero">
        <div className="products-overlay">
          <h1>Our Financial Products</h1>
          <p>
            Discover savings, investment and loan products designed
            to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="products-intro">
        <h2>Solutions for Every Stage of Life</h2>

        <p>
          Unity SACCO offers innovative financial products that
          empower members to save, invest and access affordable
          credit. Whether you are growing a business, educating your
          children or building your dream home, we have a product
          tailored for you.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-grid-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-icon">{product.icon}</div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <button className="product-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <h2>Why Our Products?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>✓ Affordable Rates</h3>
            <p>
              Competitive loan interest rates and attractive savings
              returns.
            </p>
          </div>

          <div className="benefit-card">
            <h3>✓ Flexible Repayment</h3>
            <p>
              Loan repayment plans designed around your income flow.
            </p>
          </div>

          <div className="benefit-card">
            <h3>✓ Fast Approval</h3>
            <p>
              Efficient processing and quick access to financial
              services.
            </p>
          </div>

          <div className="benefit-card">
            <h3>✓ Trusted Security</h3>
            <p>
              Safe and secure management of your savings and
              investments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <h2>Ready to Grow With Unity SACCO?</h2>

        <p>
          Join thousands of members enjoying reliable financial
          products and services.
        </p>

        <button className="cta-btn">
          Become a Member
        </button>
      </section>
    </div>
  );
}

export default Products;
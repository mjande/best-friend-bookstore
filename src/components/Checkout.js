import "../styles/Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Checkout Page</h2>
      <div className="container">
        <iframe
          src="https://giphy.com/embed/3o72FkiKGMGauydfyg"
          width="100%"
          height="100%"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Coming Soon"
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/arielle-m-coming-soon-3o72FkiKGMGauydfyg">
          via GIPHY
        </a>
      </p>

      <h3>Check out my other projects!</h3>
      <a className="github-link" href="https://github.com/mjande">
        <i className="devicon-github-original colored"></i>
        <div className="github-username">mjande</div>
      </a>
    </div>
  );
}

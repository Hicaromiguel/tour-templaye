import type { CSSProperties } from "react";
import TourCard from "./components/TourCard";
import WhatsAppButton from "./components/WhatsAppButton";
import { tours } from "./data/tours";
import { config } from "./config";
import { FormatPrice } from "./utils/whatsapp";

export default function App() {
  let heroText = "Veja o que temos, confira os preços e fale direto com a gente.";

  if (tours.length > 0) {
    const minPrice = Math.min(...tours.map((tour) => tour.price));
    heroText = `Passeios a partir de ${FormatPrice(minPrice)}. Fale direto com a gente pelo WhatsApp.`;
  }

  const heroStyle = { "--heroImage": `url(${config.heroImage})` } as CSSProperties;

  return (
    <>
      <header className="topBar">
        <div className="wrap topBarInner">
          <span className="brand">{config.businessName}</span>
          <WhatsAppButton message={config.defaultMessage} label="WhatsApp" small />
        </div>
      </header>

      <main>
        <section className="hero" style={heroStyle}>
          <div className="wrap heroInner">
            <h1>
              Escolha o passeio.
              <br />
              Chame no WhatsApp.
            </h1>
            <p className="heroText">{heroText}</p>
            <WhatsAppButton message={config.defaultMessage} label="Chamar no WhatsApp" />
          </div>
        </section>

        <section className="tours wrap" aria-labelledby="toursTitle">
          <h2 id="toursTitle">Passeios disponíveis</h2>

          {tours.length === 0 && (
            <p className="empty">Nenhum passeio disponível no momento. Chame no WhatsApp para saber as novidades.</p>
          )}

          <div className="tourGrid">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footerInner">
          <strong>{config.businessName}</strong>
          <span>{config.displayPhone}</span>
          <span>{config.hours}</span>
        </div>
      </footer>
    </>
  );
}

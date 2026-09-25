import { useState } from "react";
import type { CSSProperties } from "react";
import TourCard from "./components/TourCard";
import TourDetail from "./components/TourDetail";
import WhatsAppButton from "./components/WhatsAppButton";
import { tours } from "./data/tours";
import { config } from "./config";
import { FormatPrice } from "./utils/whatsapp";

export default function App() {
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);

  let heroText = "Confira nossos principais passeios";

  if (tours.length > 0) {
    const minPrice = Math.min(...tours.map((tour) => tour.price));
    heroText = `Entre em contato via WhatsApp`;
  }

  const heroStyle = { "--heroImage": `url(${config.heroImage})` } as CSSProperties;
  const selectedTour = tours.find((tour) => tour.id === selectedTourId);

  function HandleSelect(tourId: string) {
    setSelectedTourId(tourId);
    window.scrollTo(0, 0);
  }

  function HandleBack() {
    setSelectedTourId(null);
  }

  let mainContent = (
    <>
      <section className="hero" style={heroStyle}>
        <div className="wrap heroInner">
          <h1>
            Passeios em João Pessoa,
            <br />
            Agende você mesmo.
          </h1>
          <p className="heroText">{heroText}</p>
        </div>
      </section>

      <section className="tours wrap" aria-labelledby="toursTitle">
        <h2 id="toursTitle">Passeios:</h2>

        {tours.length === 0 && (
          <p className="empty">Nenhum passeio disponível
          </p>
        )}

        <div className="tourGrid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onSelect={HandleSelect} />
          ))}
        </div>
      </section>
    </>
  );

  if (selectedTour) {
    mainContent = <TourDetail tour={selectedTour} onBack={HandleBack} />;
  }

  return (
    <>
      <header className="topBar">
        <div className="wrap topBarInner">
          <img src= {config.logoImage} ></img>
          <WhatsAppButton message={config.defaultMessage} label="WhatsApp" small />
        </div>
      </header>

      <main>{mainContent}</main>

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

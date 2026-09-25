import { useState } from "react";
import type { CSSProperties } from "react";
import TourCard from "./components/TourCard";
import TourDetail from "./components/TourDetail";
import WhatsAppButton from "./components/WhatsAppButton";
import { tours } from "./data/tours";
import { config } from "./config";

export default function App() {
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);

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
        <div className="heroPanel">
          <span className="heroKicker">{config.businessName}</span>
          <h1>
            Passeios de barco
            <br />
            em João Pessoa
          </h1>
          <p className="heroText">
            Piscinas naturais, pôr do sol e a orla da cidade vistos do mar. Escolha o passeio e feche o agendamento direto pelo WhatsApp.
          </p>
          <WhatsAppButton message={config.defaultMessage} label="Falar no WhatsApp" />
          <span className="heroHours">{config.hours}</span>
        </div>
      </section>

      <section className="tours wrap" aria-labelledby="toursTitle">
        <div className="sectionHead">
          <h2 id="toursTitle">Nossos passeios</h2>
          <p>Preço por pessoa, saída em grupo e agendamento por mensagem.</p>
        </div>

        {tours.length === 0 && <p className="empty">Nenhum passeio disponível no momento.</p>}

        <div className="menuList">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onSelect={HandleSelect} />
          ))}
        </div>
      </section>

      <section className="how wrap" aria-labelledby="howTitle">
        <h2 id="howTitle">Como funciona</h2>

        <div className="howGrid">
          <div className="howStep">
            <span className="howNumber">1</span>
            <h3>Escolha o passeio</h3>
            <p>Veja duração, preço e o que está incluso em cada opção.</p>
          </div>

          <div className="howStep">
            <span className="howNumber">2</span>
            <h3>Chame no WhatsApp</h3>
            <p>A mensagem já sai pronta com o passeio e a quantidade de pessoas.</p>
          </div>

          <div className="howStep">
            <span className="howNumber">3</span>
            <h3>Confirme o horário</h3>
            <p>Combinamos o dia e o ponto de encontro direto por lá.</p>
          </div>
        </div>
      </section>

      <section className="area">
        <div className="wrap areaInner">
          <div className="areaText">
            <h2>Onde acontecem os passeios</h2>
            <p>
              Os passeios saem das praias da Praia Bela e dos Seixas, na região sul de João Pessoa, conhecidas pelas piscinas
              naturais na maré baixa e pelas falésias na orla.
            </p>
          </div>

          <div className="areaGallery">
            <img src="/images/praia-bela.png" alt="Praia Bela, João Pessoa" />
            <img src="/images/seixas.png" alt="Praia dos Seixas, João Pessoa" />
          </div>
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
          <img src={config.logoImage} alt={config.businessName} className="logo" />
          <WhatsAppButton message={config.defaultMessage} label="WhatsApp" small />
        </div>
      </header>

      <main>{mainContent}</main>

      <footer className="footer">
        <div className="wrap footerInner">
          <div className="footerBrand">
            <strong>{config.businessName}</strong>
            <span>João Pessoa - PB</span>
          </div>

          <div className="footerContact">
            <span>{config.displayPhone}</span>
            <span>{config.hours}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

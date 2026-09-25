import { useState } from "react";
import type { Tour } from "../data/tours";
import { FormatPrice } from "../utils/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import QuantityStepper from "./QuantityStepper";

interface TourDetailProps {
  tour: Tour;
  onBack: () => void;
}

export default function TourDetail({ tour, onBack }: TourDetailProps) {
  const [peopleCount, setPeopleCount] = useState(1);

  let peopleLabel = "pessoas";

  if (peopleCount === 1) {
    peopleLabel = "pessoa";
  }

  const totalPrice = tour.price * peopleCount;
  const message = `Olá! Gostaria de agendar o passeio "${tour.name}", com ${peopleCount} ${peopleLabel}. Poderiamos agendar?`;

  return (
    <section className="detail wrap">
      <button type="button" className="backLink" onClick={onBack}>
        Voltar
      </button>

      <div className="detailLayout">
        <div className="detailPhoto">
          <img src={tour.image} alt={tour.name} />
        </div>

        <div className="detailInfo">
          <span className="menuLocation">{tour.location}</span>
          <h2>{tour.name}</h2>
          <p className="detailDescription">{tour.description}</p>

          <ul className="detailHighlights">
            {tour.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="detailPriceRow">
            <span className="price">{FormatPrice(tour.price)}</span>
            <span className="perPerson">por pessoa · {tour.duration}</span>
          </div>

          <div className="peoplePicker">
            <span className="peopleLabel">Quantas pessoas?</span>
            <QuantityStepper value={peopleCount} onChange={setPeopleCount} />
          </div>

          <div className="totalRow">
            <span>Valor estimado</span>
            <strong>{FormatPrice(totalPrice)}</strong>
          </div>

          <WhatsAppButton message={message} label="Agendar no WhatsApp" />
        </div>
      </div>
    </section>
  );
}

import type { Tour } from "../data/tours";
import { FormatPrice } from "../utils/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const message = `Olá! Quero saber mais sobre o passeio "${tour.name}".`;

  return (
    <article className="card">
      <div className="cardPhoto">
        {tour.image && <img src={tour.image} alt={tour.name} loading="lazy" />}
        <span className="cardDuration">{tour.duration}</span>
      </div>

      <div className="cardBody">
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>

        <div className="cardFooter">
          <div className="priceRow">
            <span className="price">{FormatPrice(tour.price)}</span>
            <span className="perPerson">por pessoa</span>
          </div>
          <WhatsAppButton message={message} label="Chamar no WhatsApp" />
        </div>
      </div>
    </article>
  );
}

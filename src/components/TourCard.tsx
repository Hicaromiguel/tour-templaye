import type { Tour } from "../data/tours";
import { FormatPrice } from "../utils/whatsapp";

interface TourCardProps {
  tour: Tour;
  onSelect: (tourId: string) => void;
}

export default function TourCard({ tour, onSelect }: TourCardProps) {
  function HandleClick() {
    onSelect(tour.id);
  }

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
          <button type="button" className="waButton outline" onClick={HandleClick}>
            Saiba mais
          </button>
        </div>
      </div>
    </article>
  );
}

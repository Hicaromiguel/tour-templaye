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
    <article className="menuRow">
      <div className="menuPhoto">
        <img src={tour.image} alt={tour.name} loading="lazy" />
      </div>

      <div className="menuInfo">
        <span className="menuLocation">{tour.location}</span>
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>

        <ul className="menuHighlights">
          {tour.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="menuFooter">
          <div className="priceBlock">
            <span className="price">{FormatPrice(tour.price)}</span>
            <span className="perPerson">por pessoa · {tour.duration}</span>
          </div>
          <button type="button" className="waButton outline" onClick={HandleClick}>
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}

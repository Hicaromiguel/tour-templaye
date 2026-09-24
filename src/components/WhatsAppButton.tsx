import { GetWhatsAppLink } from "../utils/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  small?: boolean;
}

export default function WhatsAppButton({ message, label, small }: WhatsAppButtonProps) {
  let className = "waButton";

  if (small) {
    className += " small";
  }

  return (
    <a className={className} href={GetWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

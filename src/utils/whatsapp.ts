import { config } from "../config";

export function GetWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${config.phone}?text=${text}`;
}

export function FormatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

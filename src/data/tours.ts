export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image?: string;
}

export const tours: Tour[] = [
  {
    id: "boat",
    name: "Passeio de barco",
    description: "Saída pela manhã, com parada para banho e tempo livre para fotos.",
    duration: "3 horas",
    price: 120,
  },
  {
    id: "trail",
    name: "Trilha guiada",
    description: "Caminhada leve com guia local, ideal para quem quer conhecer a região a pé.",
    duration: "4 horas",
    price: 90,
  },
  {
    id: "city",
    name: "City tour",
    description: "Roteiro pelos principais pontos da cidade, com transporte incluído.",
    duration: "5 horas",
    price: 150,
  },
  {
    id: "sunset",
    name: "Pôr do sol",
    description: "Passeio no fim da tarde para ver o pôr do sol do melhor ponto de vista.",
    duration: "2 horas",
    price: 70,
  },
];

export interface Tour {
  id: string;
  name: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
}

export const tours: Tour[] = [
  {
    id: "boat",
    name: "Passeio de catamarã",
    location: "Piscinas naturais da Praia Bela",
    description:
      "Saída de catamarã até as piscinas naturais formadas na maré baixa, com parada para banho e observação dos recifes de corais.",
    duration: "2 horas",
    price: 100,
    image: "/images/catamara.jpg",
    highlights: ["Passeio no barco", "Parada em piscinas naturais", "Coletes inclusos"],
  },
  {
    id: "sunset",
    name: "Pôr do sol nos Seixas",
    location: "Praia dos Seixas",
    description:
      "Passeio de barco pela orla dos Seixas para acompanhar o pôr do sol, com vista da falésia e do litoral de João Pessoa.",
    duration: "2 horas",
    price: 70,
    image: "/images/seixas.png",
    highlights: ["Saída no fim da tarde", "Rápido", "Ideal para casais e grupos"],
  },
];

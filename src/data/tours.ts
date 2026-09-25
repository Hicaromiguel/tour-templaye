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
    description: "passeio de barco",
    duration: "2 horas",
    price: 100,
    image: "/images/catamara.jpg"
  },
  {
    id: "sunset",
    name: "Pôr do sol",
    description: "vista do por do sol",
    duration: "2 horas",
    price: 70,
    image: "/images/seixas.png"
  },
];

interface dataProps {
  title?: string;
  images?: string[];
  description?: string[];
  link?: string;
}

export const Rest: dataProps[] = [
  {
    title: "Agricultural Engineeering",
    images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    description: [
      "Design and development of farm machinery and equipment, such as tractors, combines, and irrigation systems.",
      "Design and construction of hydroponic greenhouses for the production of fruits using nutrient-rich water",
      "Development of renewable energy technologies such as biogas systems and solar-powered irrigation pumps",
      "Environmental impact assessments and design of sustainable agricultural practices",
    ],
    link: "agricultural-engineering",
  },

  {
    title: "Mechanical and Civil Engineering",
    images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    description: [
"Fabrication and assembly of mechanical components and systems.",
"Construction management for civil engineering projects.",
"Environmental engineering, including water and waste management systems.",
      "Structural engineering, including design and analysis of buildings and other structures."
    ],
    link: "mechanical-engineering",
  },
];

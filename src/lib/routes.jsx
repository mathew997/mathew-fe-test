const routes = [
  { label: "National Team", href: "#" },
  { label: "Competitions", href: "#" },
  {
    label: "Football in Qatar",
    href: "#",
  },
  {
    label: "Regulations",
    href: "#",
    children: [
      { label: "Sub menu 1", href: "#" },
      { label: "Sub menu 2", href: "#" },
      { label: "Sub menu 3", href: "#" },
    ],
  },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "Sub menu 1", href: "#" },
      { label: "Sub menu 2", href: "#" },
      { label: "Sub menu 3", href: "#" },
    ],
  },
  { label: "Football Development", href: "#" },
  {
    label: "Media Center",
    href: "#",
    children: [
      { label: "Sub menu 1", href: "#" },
      { label: "Sub menu 2", href: "#" },
      { label: "Sub menu 3", href: "#" },
    ],
  },
  { label: "Tenders", href: "#" },
  { label: "Referees", href: "#" },
];

export default routes;

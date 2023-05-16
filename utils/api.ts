import { Color, Spots, Mushroom } from "@/types";

const mushrooms: Mushroom[] = [
  {
    name: "nervous bell",
    spots: Spots.dashed,
    color: Color.red,
    latlng: [52.082042, 5.236192],
  },
  {
    name: "nice benz",
    spots: Spots.dotted,
    color: Color.blue,
    latlng: [52.080678, 5.236457],
  },
  {
    name: "quizzical chaplygin",
    spots: Spots.double,
    color: Color.red,
    latlng: [52.081624, 5.235895],
  },
  {
    name: "nifty bhabha",
    spots: Spots.groove,
    color: Color.blue,
    latlng: [52.080671, 5.236392],
  },
  {
    name: "peaceful dijkstra",
    spots: Spots.hidden,
    color: Color.green,
    latlng: [52.081451, 5.235404],
  },
  {
    name: "nostalgic bhaskara",
    spots: Spots.inset,
    color: Color.blue,
    latlng: [52.080552, 5.234156],
  },
  {
    name: "silly burnell",
    spots: Spots.ridge,
    color: Color.blue,
    latlng: [52.080598, 5.234361],
  },
  {
    name: "romantic cray",
    spots: Spots.groove,
    color: Color.green,
    latlng: [52.080253, 5.234631],
  },
  {
    name: "vigilant bose",
    spots: Spots.solid,
    color: Color.red,
    latlng: [52.081063, 5.236819],
  },
  {
    name: "quirky buck",
    spots: Spots.dashed,
    color: Color.green,
    latlng: [52.081163, 5.236446],
  },
  {
    name: "stoic cartwright",
    spots: Spots.double,
    color: Color.blue,
    latlng: [52.080861, 5.235876],
  },
  {
    name: "pensive clarke",
    spots: Spots.dotted,
    color: Color.yellow,
    latlng: [52.081199, 5.234929],
  },
  {
    name: "strange cannon",
    spots: Spots.hidden,
    color: Color.yellow,
    latlng: [52.080273, 5.234664],
  },
  {
    name: "stupefied bohr",
    spots: Spots.none,
    color: Color.red,
    latlng: [52.081883, 5.235415],
  },
  {
    name: "pedantic colden",
    spots: Spots.hidden,
    color: Color.blue,
    latlng: [52.081813, 5.236781],
  },
  {
    name: "priceless davinci",
    spots: Spots.dashed,
    color: Color.green,
    latlng: [52.081538, 5.236694],
  },
  {
    name: "vibrant chandrasekhar",
    spots: Spots.outset,
    color: Color.red,
    latlng: [52.081182, 5.237143],
  },
  {
    name: "wizardly booth",
    spots: Spots.groove,
    color: Color.green,
    latlng: [52.080429, 5.237424],
  },
  {
    name: "suspicious driscoll",
    spots: Spots.inset,
    color: Color.yellow,
    latlng: [52.080074, 5.236462],
  },
  {
    name: "optimistic blackburn",
    spots: Spots.ridge,
    color: Color.red,
    latlng: [52.080144, 5.235857],
  },
  {
    name: "reverent curie",
    spots: Spots.groove,
    color: Color.blue,
    latlng: [52.081222, 5.235965],
  },
];

const getMushrooms = (): Promise<Mushroom[]> =>
  new Promise<Mushroom[]>((resolve) =>
    setTimeout(() => resolve(mushrooms), 1500),
  );

export default getMushrooms;

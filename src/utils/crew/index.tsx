import douglas from "@assets/crew/image-douglas-hurley.png";
import mark from "@assets/crew/image-mark-shuttleworth.png";
import victor from "@assets/crew/image-victor-glover.png";
import ansari from "@assets/crew/image-anousheh-ansari.png";

const FlightCrew = [
  {
    name: "Douglas Hurley",
    about:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    position: "Commander",
    img: `${douglas}`,
  },
  {
    name: "MARK SHUTTLEWORTH",
    about:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.h",
    position: "Mission Specialist ",
    img: `${mark}`
  },
  {
    name: "Victor Glover",
    about:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    position: "PILOT",
    img: `${victor}`
  },
  {
    name: "Anousheh Ansari",
    about:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    position: "Flight Engineer",
    img: `${ansari}`
  },
];

export { FlightCrew }

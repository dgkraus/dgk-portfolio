import React from 'react';

const Cards = [
  {
    id: 0,
    headline: "iDolize v2",
    subheading: "React frontend combined with Django backend",
    line1: "React",
    line2: "Javascript",
    line3: "Typescript",
    line4: "Python",
    line5: "Django",
    desc: "Based on my iDolize Django backend, this project uses a TypeScript/React frontend for a much nicer and easier to use user experience."
  },
  {
    id: 1,
    headline: "iDolize",
    subheading: "A Django-based idol search database",
    line1: "Python",
    line2: "Django",
    line3: "HTML/CSS",
    line4: "SQLite",
    line5: "Rest API",
    desc: "Using Python and Django for the backend, I built a searchable Idol database using SQLite. The focus was on creating a project with a real-world use."
  },
  {
    id: 2,
    headline: "gobzer",
    subheading: "A Python game bot based on OpenCV image recognition",
    line1: "Python",
    line2: "OpenCV",
    line3: "Tkinter",
    line4: "PyAutoGUI",
    desc: "A fun sideproject that uses OpenCV AI image recognition to operate an ingame bot. Offers a user interface for easy use and customization."
  },
  {
    id: 3,
    headline: "Frontend",
    subheading: "Creating elegant designs",
    line1: "React",
    line2: "Javascript",
    line3: "Typescript",
    line4: "NextJS"
  }
];

interface PortfolioCardsProps {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>
  isExpanded: boolean
}

const PortfolioCards: React.FC<PortfolioCardsProps> = ({ setIsExpanded, setSelectedCard, isExpanded }) => {
  const listItems = Cards.map((card) => (
    <li
      key={card.id}
      className="flex flex-col w-full cursor-pointer"
      onClick={() => {
        setSelectedCard(card)
        setIsExpanded(true)
      }}
    >
      <div className="relative text-center flex-1 shadow-lg p-10 rounded-xl my-10 hover:scale-105 hover:z-10 transition-transform duration-500 dark:bg-white bg-gradient-to-b from-cyan-500 to-white outline outline-10 outline-black border-r-8 border-cyan-600">
        <h3 className="text-lg font-medium pt-8 pb-2">{card.headline}</h3>
        <h4 className="py-4 text-teal-600 ">{card.subheading}</h4>
        <p className="text-gray-800 py-1 ">{card.line1}</p>
        <p className="text-gray-800 py-1 ">{card.line2}</p>
        <p className="text-gray-800 py-1 ">{card.line3}</p>
        <p className="text-gray-800 py-1 ">{card.line4}</p>
        <p className="text-gray-800 py-1 ">{card.line5}</p>
        <p className="text-red-300 py-10 ">{card.desc}</p>
      </div>
    </li>
  ))

  return (
      <ul className="gap-2 items-stretch min-h-screen w-full overflow-hidden flex font-burtons">
        {listItems}
      </ul>
  )
}

export default PortfolioCards;
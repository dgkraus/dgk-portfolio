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
    headline: "Additional skills",
    subheading: "Curious about my other skills? Click to explore!",
    line1: "Fullstack developments (React, Next.js, Django)",
    line2: "QA based on ISTQB principles",
    line3: "Strong problem-solving and communication skills",
    desc: "I thrive on challenges and am eager to continuously expand my skill set. I enjoy mastering a new framework or improving my current skills."
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
      <div className="relative text-center flex-1 shadow-lg p-10 rounded-xl my-10 hover:scale-105 hover:z-10 transition-transform duration-500 dark:bg-white bg-gradient-to-b from-blue-400 to-gray-200 outline outline-10 outline-black border-r-8 border-gray-500">
        <h3 className="text-lg font-medium pt-8 pb-2 tracking-wider">{card.headline}</h3>
        <h4 className="py-4 text-blue-600 ">{card.subheading}</h4>
        <p className="text-black py-1 ">{card.line1}</p>
        <p className="text-black py-1 ">{card.line2}</p>
        <p className="text-black py-1 ">{card.line3}</p>
        <p className="text-black py-1 ">{card.line4}</p>
        <p className="text-black py-1 ">{card.line5}</p>
        <p className="text-blue-900 italic py-10 ">{card.desc}</p>
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
"use client"

import { useState } from 'react';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioCards from '@/components/PortfolioCards'
import DetailView from '@/components/DetailView'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { faW } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCard, setSelectedCard] = useState<any>(null)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dennis Portfolio</title>
      </Head>
      <main className="bg-slate-600">
        <nav className="fixed flex top-0 justify-between items-center left-0 w-full text-white p-4 z-50 dark:text-white">
          <h1 className="font-burtons text-xl">dkg</h1>
          <ul className="flex items-center m-auto">
            <li className=''>
              <a className='h-1 bg-black mr-10 block w-64'></a>
            </li>
            <li className='px-2'>
              <a href="https://github.com/dgkraus/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                  icon={faGithub} 
                  size="2x" 
                  className="transition-all hover:rotate-[360deg] ease-linear duration-300 cursor-pointer"
                />
              </a>
            </li>
            <li className='px-2'>
              <a href="https://www.linkedin.com/in/dennisgk/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  size="2x" 
                  className="transition-all hover:rotate-[360deg] ease-linear duration-300 cursor-pointer"
                />
              </a>
            </li>
            <li className='px-2'>
              <a href="https://www.wantedly.com/id/dennis_kraus" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                  icon={faW} 
                  size="2x" 
                  className="transition-all hover:rotate-[360deg] ease-linear duration-300 cursor-pointer"
                />
              </a>
            </li>
            <li>
              <a className='h-1 bg-black ml-10 block w-64'></a>
            </li>
            </ul>
            <ul className="flex">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
          </ul>
        </nav>
        <section className="relative min-h-screen flex items-center justify-center">
        <AnimatePresence>
            <motion.div
              key={isExpanded ? 'detail' : 'list'}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              exit={{ opacity:0, width: 0, transition: { duration: 0.5 } }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="profile-container absolute w-full"
            >
              {!isExpanded ? (
                <PortfolioCards
                  setIsExpanded={setIsExpanded}
                  setSelectedCard={setSelectedCard}
                  isExpanded={isExpanded}
                />
              ) : (
                <DetailView setIsExpanded={setIsExpanded} selectedCard={selectedCard}  />
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  )
}
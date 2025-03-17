import React from 'react'
import { TiArrowBack } from "react-icons/ti";
import CardIdolizeV2 from './CardIdolizeV2'
import CardIdolizeV1 from './CardIdolizeV1';
import CardGobzer from './CardGobzer';
import AdditionalInfo from './AdditionalInfo'

interface Card {
  id: number
  headline: string
  subheading: string
  line1: string
  line2: string
  line3: string
  line4: string
}
  
interface DetailViewProps {
  selectedCard: Card | null
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}
  
const DetailView: React.FC<DetailViewProps> = ({ selectedCard, setIsExpanded }) => {

  const renderCard = () => {
    switch (selectedCard!.id) {
      case 0:
        return <CardIdolizeV2 />
      case 1:
        return <CardIdolizeV1 />
      case 2:
        return <CardGobzer />
      case 3:
        return <AdditionalInfo />
      default:
        return <p>Something went wrong, pelase select a different card</p>
    }
  }

  if (!selectedCard) return null
    
  return (       
      <div
        className="font-burtons max-h-screen shadow-lg p-10 rounded-xl my-10 transition-transform duration-300 dark:bg-white flex-1 bg-gradient-to-b from-blue-400 to-gray-200"
      > 
      <TiArrowBack onClick={() => setIsExpanded(false)} className='cursor-pointer hover:scale-110 transition-transform size-10'>----</TiArrowBack>
        {renderCard()}
      </div>
  )
}
  
  export default DetailView
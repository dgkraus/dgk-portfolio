const CardGobzer: React.FC = () => (
    <div>
        <h3 className="mb-4 text-center text-2xl">Gobzer</h3>
        <p className="mb-2 py-4 text-teal-600 text-center">A fully functioning WoW game bot using OpenCV image recognition.</p>
    <div className="flex">
        <div className="mb-10 w-1/2 text-left">
            <p className='mb-10 text-black'>Technologies: Python, OpenCV, Tkinter, PyAutoGUI</p>
            <p className='text-orange-500'>This Python-based bot uses OpenCV to detect ingame buttons and automates interactions using PyAutoGui. It offers a user-friendly, simple UI and customizable settings.</p>
            <p className='text-orange-500'>The goal was to create an intuitive and accessible automation tool that requires minimal setup and can be operated by users without any programming skills.</p>
        </div>

        <div className=" w-1/2 flex flex-col items-end text-right ml-auto">
            <a href="https://github.com/dgkraus/gobzer" target="_blank"><img src="/gobzer.webp" alt="gobzer icon" className="size-40" /></a>
            <a href="https://github.com/dgkraus/gobzer" target="_blank" className="text-orange-500 py-4">
                Click here to check out the Github repository!
            </a>
        </div>
    </div>
    </div>

  )
  
  export default CardGobzer
const CardIdolizeV2: React.FC = () => (
    <div>
        <h3 className="mb-4 text-center text-2xl tracking-wider">iDolize v2</h3>
        <p className="mb-2 py-4 text-blue-600 text-center">A dynamic website powered by React and Django, offering a user-friendly interface that allows users to explore and engage with their favorite idols.</p>
    <div className="flex">
        <div className="mb-10 w-1/2 text-left">
            <p className='mb-10 text-black'>Technologies: React, JavaScript, TypeScript, Python, Django</p>
            <p className='text-blue-900'>Uses the first version of the original iDolize project, iDolize v2 features a much more polished and reactive frontend using TypeScript and React. Offers backend integration via Rest API built with Django.</p>
            <p className='text-blue-900'>This iteration offers a real use case by allowing users to search for their favorite idols and will eventually allow users to save idols as their favorites to receive news about them.</p>
        </div>

        <div className=" w-1/2 flex flex-col items-end text-right ml-auto">
            <a href="https://github.com/dgkraus/idolize-v2" target="_blank"><img src="/idolize.png" alt="idolize icon" className="size-40" /></a>
            <a href="https://github.com/dgkraus/idolize-v2" target="_blank" className="text-blue-900 py-4 hover:scale-105">
                Click here to check out the Github repository!
            </a>
        </div>
    </div>
    </div>

  )
  
  export default CardIdolizeV2
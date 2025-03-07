const CardIdolizeV1: React.FC = () => (
    <div>
        <h3 className="mb-4 text-center text-2xl">iDolize v1</h3>
        <p className="mb-2 py-4 text-teal-600 text-center">A powerful Django-based backend with a built-in REST API, enabling users to query a comprehensive idol database and discover their perfect match.</p>
    <div className="flex">
        <div className="mb-10 w-1/2 text-left">
            <p className='mb-10 text-black'>Technologies: Python, Django, Rest API</p>
            <p className='text-orange-500'>Blending my interest for both coding and Japanese idols, this first iteration of iDolize provided the foundation for a scalable idol database, complete with a use-friendly query feature.</p>
            <p className='text-orange-500'>The focus was on the backend, offering a practical use case for an API, with a simple HTML frontend generating a dynamic idol profile based on this API data.</p>
        </div>

        <div className=" w-1/2 flex flex-col items-end text-right ml-auto">
            <a href="https://github.com/dgkraus/iDolize" target="_blank"><img src="/idolize.png" alt="idolize icon" className="size-40" /></a>
            <a href="https://github.com/dgkraus/iDolize" target="_blank" className="text-orange-500 py-4">
                Click here to check out the Github repository!
            </a>
        </div>
    </div>
    </div>

  )
  
  export default CardIdolizeV1
const AdditionalInfo: React.FC = () => (
    <div>
        <h3 className="mb-4 text-center text-2xl tracking-wider">Additional Information</h3>
        <p className="mb-2 py-4 text-blue-600 text-center">Fullstack engineer with a strong foundation in software quality and ISTQB principles.</p>
    <div className="flex">
        <div className="mb-10 w-1/2 text-left">
            <p className='mb-10 text-black'>Additional skills & experience: Software testing (ISTQB-based), Business-level Japanese (JLPT N2).</p>
            <p className='text-blue-900'>I thrive on challenges and problem-solving, whether working independently or collaborating with a team. My attention to detail helps me write clean, maintainable code, debug efficiently, and communicate project requirements clearly to team members and stakeholders.</p>
            <p className='text-blue-900'>Years of freelance work have made me highly independent and efficient, while also reinforcing the value of teamwork in achieving the best possible results.</p>
        </div>

        <div className=" w-1/2 flex flex-col items-end text-right ml-auto">
            <a href="https://github.com/dgkraus/gobzer" target="_blank"><img src="/contact.webp" alt="contact icon" className="size-40" /></a>
            <a href="https://www.linkedin.com/in/dennisgk/" target="_blank" className="text-blue-900 py-4 hover:scale-105">
                Feel free to reach out to me on Linkedin! I'll get back to you as soon as possible.
            </a>
        </div>
    </div>
    </div>

  )
  
  export default AdditionalInfo
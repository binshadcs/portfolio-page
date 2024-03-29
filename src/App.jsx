import { useState } from 'react';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSun } from "react-icons/fa";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function onChange() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
      <section className='min-h-screen '>
          <nav className='py-10 mb-12 flex justify-between sticky top-0 bg-white dark:bg-gray-900 z-10'>
            <h1 className='text-xl font-burtons dark:text-white'>binshadcs</h1>
            <ul className='flex items-center'>
              <li>
                  {
                    darkMode ? <FaSun onClick={onChange} className='cursor-pointer text-2xl text-orange-300' /> : 
                    <BsFillMoonStarsFill onClick={onChange}  className='cursor-pointer text-xl' /> 
                  }
                
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-md rounded-lg ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Binshad K</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Freelancer providing services for programming and design content needs. Join me down below and let's get cracking! 
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <img src='dev-ed-wave.png' alt="image" />
          </div>
      </section>
      <section>
        <div className='dark:text-white'>
          <h3 className='text-3xl py-1'>Services I offer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
            Since the beginning of my journey as a freelancer developer,
            I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
          </p>
        </div>

       <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white'>
          <img className='mx-auto' src="design.png" alt="" width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Beautiful Designs</h3>
          <p className='py-2 '>
            Creating elegant design suited for your needs following core design theory.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Canva</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white'>
          <img className='mx-auto' src="code.png" alt="" width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant design suited for your needs following core design theory.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Canva</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-white'>
          <img className='mx-auto' src="consulting.png" alt="" width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant design suited for your needs following core design theory.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Canva</p>
          <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
        </div>
       </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <img src="web6.png" alt="web1" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src="web1.png" alt="web2" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src="web2.png" alt="web3" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src="web3.png" alt="web4" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src="web4.png" alt="web5" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
          <div className='basis-1/3 flex-1'>
            <img src="web5.png" alt="web6" className='rounded-lg object-cover' width={'100%'} height={'100%'} />
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default App

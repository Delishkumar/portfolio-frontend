import HTML from './images/html.png'
import CSS from './images/css-3.png'
import JS from './images/js.png'
import REACTICON from './images/physics.png'
import DB from './images/db.png'
import NODE from './images/nodejs.png'
import TAILWIND from './images/tailwindcss.png'
import REDUX from './images/redux.png'
import POSTMAN from './images/postman.png'
import FIREBASE from './images/firebase.png'
import EXPRESS from './images/icons8-express-js-96.png'
import GITHUB from './images/icons8-github-logo-100.png'
import GIT from './images/icons8-git-100.png'
import ATLAS from './images/icons8-mongodb-100.png'




function Skil(){
    return(
        <div className='h-full'>
               <h1 className='text-center text-blue-700 text-4xl mt-10 font-bold '>Skil</h1>
            <div>
             
                <h2 className='text-orange-500 text-center pt-3 text-2xl m-8 font-extrabold animate-colorchange' >Frontend</h2>
                <div className='flex flex-col items-center gap-7 md:justify-evenly md:flex-row'>
                    <div className='text-center'>
                        <img src={HTML} style={{ width: "70px" }} alt='HTML5' className='animate-bounce hover:hover:scale-125 transition-transform duration-300'/>
                    <p className='p-2 font-mono text-red-500'>HTML5</p>
                    </div>
                        <div className='text-center'>
                        <img src={CSS} style={{ width: "70px" }}  alt='CSS3' className=' hover:hover:scale-125 transition-transform duration-300'/>
                        <p className='p-2 font-mono text-blue-500'>CSS3</p>
                        </div>
                               <div className='text-center'>
                               <img src={TAILWIND} style={{ width: "70px" }}  alt='tailwind'   className=' hover:hover:scale-125 transition-transform duration-300'/>
                               <p className='p-2 font-mono text-blue-700'>Tailwindcss</p>
                               </div>
                               <div className='text-center'>
                               <img src={JS} style={{ width: "60px" }} alt='JS'  className=' hover:hover:scale-125 transition-transform duration-300' />
                                <p className='p-2 font-mono text-yellow-500'>JS-ES15</p>
                               </div>
                               <div className='text-center'>
                               <img src={REACTICON} style={{ width: "70px" }}  alt='react'  className=' animate-slowspin hover:hover:scale-125 transition-transform duration-300'/>
                                <p className='p-2 font-mono text-sky-400'>React js</p>
                               </div>
                                   
                </div>
            </div>

            <div className='p-7'>
             
             <h2 className='text-orange-500 text-center p-10 text-2xl text mt-8 font-extrabold animate-colorchange'>Backend</h2>
             <div className='flex flex-col items-center gap-7 md:justify-evenly md:flex-row'>
                <div className='text-center'>
                <img src={DB} style={{ width: "80px" }} alt='DB'  className='animate-leafsway hover:hover:scale-125 transition-transform duration-300'/>
                    <p className='p-2 font-mono text-green-600'>MongoDB</p>
                </div>
                <div className='text-center'>
                <img src={NODE} style={{ width: "70px" }} alt='node'  className=' hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-lime-600'>Node js</p>
                </div>
                <div className='text-center'>
                    
                <img src={EXPRESS} style={{ width: "70px" }} alt='postman'  className=' hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-red-600'>Express</p>
                </div>
                <div className='text-center'>
                <img src={FIREBASE} style={{ width: "70px" }} alt='firebase'  className=' animate-fire hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-orange-500'>Firebase</p>
                </div>
                <div className='text-center'>
                <img src={REDUX} style={{ width: "70px" }} alt='redux'  className='animate-slowspin hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-sky-500'>Redux</p>
                </div>
                 
                          
                </div>
            </div>

            <div className='p-7'>
             
             <h2 className='text-orange-500 text-center p-10 text-2xl text mt-8 font-extrabold animate-colorchange'>Deploy&Tools</h2>
             <div className='flex flex-col items-center gap-7 md:justify-evenly md:flex-row'>
               
                <div className='text-center'>
                <img src={GITHUB} style={{ width: "70px" }} alt='node'  className=' hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-lime-600'>Github</p>
                </div>
                <div className='text-center'>
                    
                <img src={GIT} style={{ width: "70px" }} alt='postman'  className=' hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-red-600'>Git</p>
                </div>
                <div className='text-center'>
                <img src={POSTMAN} style={{ width: "70px" }} alt='firebase'  className='  hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-orange-500'>Postman</p>
                </div>
                <div className='text-center'>
                <img src={ATLAS} style={{ width: "70px" }} alt='redux'  className=' hover:hover:scale-125 transition-transform duration-300'/>
                <p className='p-2 font-mono text-sky-500'>Atlas</p>
                </div>
                 
                           
                      
                           
             </div>
         </div>

        </div>
    )
}
export default Skil
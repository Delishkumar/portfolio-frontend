import HTML from './images/html.png'
import CSS from './images/css-3.png'
import JS from './images/js.png'
import REACTICON from './images/physics.png'
import DB from './images/db.png'
import NODE from './images/nodejs.png'
import TAILWIND from './images/tailwindcss.png'
import GIT from './images/git.png'
import POSTMAN from './images/postman.png'
import FIREBASE from './images/firebase.png'



function Skil(){
    return(
        <div>
               <h1 className='text-center text-blue-700 text-4xl mt-10 font-mono font-thin'>Skil</h1>
            <div>
             
                <h2 className='text-orange-500 text-center pt-3 text-2xl m-8 font-extrabold'>Frontend</h2>
                <div className='flex justify-evenly'>
                        <img src={HTML} style={{ width: "80px" }} alt='HTML'  className='animate-pulse'/>
                                <img src={CSS} style={{ width: "80px" }}  alt='CSS'  className='animate-pulse'/>
                                <img src={TAILWIND} style={{ width: "80px" }}  alt='tailwind'  className='animate-pulse'/>
                                <img src={JS} style={{ width: "80px" }} alt='JS'  className='animate-pulse'/>
                                   <img src={REACTICON} style={{ width: "80px" }}  alt='react'  className='animate-pulse'/>
                </div>
            </div>

            <div className='p-7'>
             
             <h2 className='text-orange-500 text-center p-10 text-2xl text mt-8 font-extrabold'>Backend</h2>
             <div className='flex justify-evenly'>
                 <img src={DB} style={{ width: "100px" }} alt='DB' className='animate-pulse'/>
                           <img src={NODE} style={{ width: "80px" }} alt='node' className='animate-pulse'/>
                           <img src={POSTMAN} style={{ width: "80px" }} alt='postman' className='animate-pulse'/>
                           <img src={FIREBASE} style={{ width: "80px" }} alt='firebase' className='animate-pulse'/>
                           <img src={GIT} style={{ width: "80px" }} alt='git' className='animate-pulse'/>
             </div>
         </div>

        </div>
    )
}
export default Skil
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
        <div className='h-full'>
               <h1 className='text-center text-blue-700 text-4xl mt-10 font-bold '>Skil</h1>
            <div>
             
                <h2 className='text-orange-500 text-center pt-3 text-2xl m-8 font-extrabold'>Frontend</h2>
                <div className='flex justify-evenly'>
                        <img src={HTML} style={{ width: "70px" }} alt='HTML'/>
                                <img src={CSS} style={{ width: "70px" }}  alt='CSS' />
                                <img src={TAILWIND} style={{ width: "70px" }}  alt='tailwind'  />
                                <img src={JS} style={{ width: "60px" }} alt='JS'  />
                                   <img src={REACTICON} style={{ width: "70px" }}  alt='react' />
                </div>
            </div>

            <div className='p-7'>
             
             <h2 className='text-orange-500 text-center p-10 text-2xl text mt-8 font-extrabold'>Backend</h2>
             <div className='flex justify-evenly'>
                 <img src={DB} style={{ width: "80px" }} alt='DB' />
                           <img src={NODE} style={{ width: "70px" }} alt='node' />
                           <img src={POSTMAN} style={{ width: "70px" }} alt='postman' />
                           <img src={FIREBASE} style={{ width: "70px" }} alt='firebase'/>
                           <img src={GIT} style={{ width: "70px" }} alt='git'/>
             </div>
         </div>

        </div>
    )
}
export default Skil
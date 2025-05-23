import HTML from './images/html.png';
import CSS from './images/css-3.png';
import JS from './images/js.png';
import REACTICON from './images/physics.png';
import DB from './images/db.png';
import NODE from './images/nodejs.png';
import TAILWIND from './images/tailwindcss.png';
import REDUX from './images/redux.png';
import POSTMAN from './images/postman.png';
import FIREBASE from './images/firebase.png';
import EXPRESS from './images/icons8-express-js-96.png';
import GITHUB from './images/icons8-github-logo-100.png';
import GIT from './images/icons8-git-100.png';
import ATLAS from './images/icons8-mongodb-100.png';

function Skil() {
  return (
    <div className="h-full scroll-smooth">
      <h1 className="text-center text-blue-700 text-4xl mt-10 font-bold">Skil</h1>

      {/* Frontend */}
      <section>
        <h2 className="text-orange-500 text-center pt-3 text-2xl m-8 font-extrabold animate-colorchange">Frontend</h2>
        <div className="flex flex-col items-center gap-7 md:justify-evenly md:flex-row flex-wrap">
          <SkillItem img={HTML} label="HTML5" color="text-red-500" />
          <SkillItem img={CSS} label="CSS3" color="text-blue-500" />
          <SkillItem img={TAILWIND} label="Tailwindcss" color="text-blue-700" />
          <SkillItem img={JS} label="JS-ES15" color="text-yellow-500" />
          <SkillItem img={REACTICON} label="React js" color="text-sky-400" />
        </div>
      </section>

      {/* Backend */}
      <section className="p-7">
        <h2 className="text-orange-500 text-center p-10 text-2xl mt-8 font-extrabold animate-colorchange">Backend</h2>
        <div className="flex flex-col items-center gap-7 md:justify-evenly md:flex-row flex-wrap">
          <SkillItem img={DB} label="MongoDB" color="text-green-600" />
          <SkillItem img={NODE} label="Node js" color="text-lime-600" />
          <SkillItem img={EXPRESS} label="Express.js" color="text-red-600" />
          <SkillItem img={FIREBASE} label="Firebase" color="text-orange-500" />
          <SkillItem img={REDUX} label="Redux" color="text-sky-500" />
        </div>
      </section>

      {/* Deploy & Tools */}
      <section className="p-7">
        <h2 className="text-orange-500 text-center p-10 text-2xl mt-8 font-extrabold animate-colorchange">Deploy & Tools</h2>
        <div className="flex flex-col items-center gap-7 md:justify-evenly md:flex-row flex-wrap">
          <SkillItem img={GITHUB} label="Github" color="text-lime-600" />
          <SkillItem img={GIT} label="Git" color="text-red-600" />
          <SkillItem img={POSTMAN} label="Postman" color="text-orange-500" />
          <SkillItem img={ATLAS} label="Atlas" color="text-sky-500" />
        </div>
      </section>
    </div>
  );
}

function SkillItem({ img, label, color }) {
  return (
    <div className="text-center">
      <div className="relative w-28 h-24 mx-auto flex items-center justify-center">
        {/* Rotating Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 via-yellow-500 to-purple-500 animate-spin-slow"></div>
        {/* Inner Circle */}
        <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <img src={img} alt={label} className="w-12 h-12 object-contain" />
        </div>
      </div>
      <p className={`pt-2 font-mono ${color}`}>{label}</p>
    </div>
  );
}

export default Skil;


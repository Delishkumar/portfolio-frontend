

 function Footer(){
    return(
        <div className="mt-0 p-5 text-center text-gray-300 bg-black">
             <div className="text-center mt-8 p-3">    <p><i class="fa-regular fa-envelope"></i> Email : delishkumar800@gmail.com</p>
             <p><i class="fa-solid fa-phone-volume"></i> phone : +919942228330</p></div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Delishkumar" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition">
          <i class="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/delish05/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
          <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
       
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Delish Kumar. All rights reserved.</p>
      </div>

    )}
export default Footer
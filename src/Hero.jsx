import React from "react";
import useFetchData from "./useFetchdata";
function Hero(){
  
const hero = useFetchData('http://127.0.0.1:8000/api/users')

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pt-20">
      <div className="text-center px-4">
        <img src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1136-1727859974.JPG" alt="profile" className="w-32 h-32 rounded-full mx-auto mb-4  border-4 border-blue-500" />
        <div className="flex justify-center items-center mt-4">
          <a href="https://www.linkedin.com/" target="_blank" className="mx-2">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" className="h-12 w-12 hover:opacity-75 hover:scale-125 hover:transition-transform duration-300" />
          </a>
          <a href="https://www.github.com/" target="_blank" className="mx-2 ">
            <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="GitHub" className="h-8 w-8 hover:opacity-75 hover:scale-125 hover:transition-transform duration-300" />
          </a>
        </div>
        {hero?.map(user => (
          <React.Fragment key={user.id}>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{user.name}</h1>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">{user.email}</h2>
          </React.Fragment>
        ))}
        <p className="text-blue-600 dark:text-blue-400 uppercase font-bold">Développeur Web Junior</p>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300 italic">"Créer, apprendre, partager."</p>
      </div>
    </section>
  );
};


export default Hero;

import Image from "next/image"; // Only keep this if you're using Image elsewhere, otherwise remove it.
import { FC } from "react"; // Import FC type for defining a functional component type.

const Home: FC = () => {
  return (
    <div className="background flex items-center justify-center h-screen">
         <a href="http://localhost:3000/api/teacherStudent" target="_blank" className="no-underline">
    <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-4 px-8 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-2 hover:from-green-500 hover:to-blue-500  hover:animate-spin-slow">

        Click for API Data
     
    </button>
    </a>
  </div>
  );
}

export default Home;


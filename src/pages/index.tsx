//import global css
//global.css
// global css
import "../../src/app/globals.css"
// importing fc react
import { FC } from 'react';
//use router
//use router components 
import { useRouter } from 'next/router';
//useRouter hooks
const Home: FC = () => {
  const router = useRouter();
  //constant function 
//function for gotoTeachers
  const goToTeachers = () => {
    router.push('/teachers');
  };
  // go to student
  //edited gotostudents
//go to student function
  const goToStudents = () => {
    router.push('/students');
  };
//main function starts here
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h3 className="text-4xl mb-8 font-bold shadow-lg p-3 rounded-lg">
        Welcome to the API Database website 
      </h3>

      <div className="flex space-x-8">
     
        //button for go to teacher data
        <button
          onClick={goToTeachers}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Teacher
        </button>
//button to go student database
        <button
          onClick={goToStudents}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Students
        </button>
      </div>
    </div>
  );
};
//export the home page
export default Home;

import "../../src/app/globals.css"
import { FC } from 'react';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const router = useRouter();

  const goToTeachers = () => {
    router.push('/teachers');
  };

  const goToStudents = () => {
    router.push('/students');
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl mb-8 font-bold shadow-lg p-3 rounded-lg">
        Welcome to the API Database
      </h2>

      <div className="flex space-x-8">
        <button
          onClick={goToTeachers}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          View Teachers
        </button>

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

export default Home;

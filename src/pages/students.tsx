import "../../src/app/globals.css"
import { FC, useEffect, useState } from 'react';

interface Person {
  name: string;
  subject: string;
}

const Students: FC = () => {
  const [students, setStudents] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/teacherStudent');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStudents(data.students);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white p-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student) => (
          <div
            key={student.name}
            className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center">
              <img
                src="/students/studentimage.jpg"
                alt="Student"
                className="w-24 h-24 mb-4 rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p className="text-gray-200">{student.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;

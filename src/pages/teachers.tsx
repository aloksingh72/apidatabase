import { FC, useEffect, useState } from 'react';

interface Person {
  name: string;
  subject: string;
}

const Teachers: FC = () => {
  const [teachers, setTeachers] = useState<Person[]>([]);
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
        setTeachers(data.teachers);
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
    <div className="bg-black min-h-screen text-white p-5">
      <h2 className="text-4xl mb-8 font-bold text-center">Teachers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.name}
            className="relative bg-gradient-to-r p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-gradient-to-r from-purple-800 to-gray-900 rounded-lg p-6 flex flex-col items-center h-full">
              <img
                src="/teachers/teacherimage.jpg"
                alt="Teacher"
                className="w-24 h-24 mb-6 rounded-full border-4 border-white"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{teacher.name}</h3>
              <p className="text-gray-300">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;

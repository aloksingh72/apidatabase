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
    <div className="bg-black w-full h-full text-white p-5">
      <h2 className="text-2xl mb-4">Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.name} className="mb-1">
            <strong>{teacher.name}</strong> - {teacher.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;

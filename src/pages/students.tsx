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
    <div className="bg-black w-full h-full text-white p-5">
      <h2 className="text-2xl mb-4">Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.name} className="mb-1">
            <strong>{student.name}</strong> - {student.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;

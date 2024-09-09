// pages/api/teacherStudent.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Person {
  name: string;
  subject:string;
}

let students: Person[] = [];
let teachers: Person[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ teachers, students });
      break;

    case 'POST': {
      const { role, name,subject } = req.body as { role: string; name: string;subject: string };
      if (!name || !role || !subject) {
        res.status(400).json({ error: 'Missing role or name or subject in request body' });
        return;
      }

      if (role === 'teacher') {
        teachers.push({ name,subject });
        res.status(201).json({ message: 'Teacher added successfully' });
      } else if (role === 'student') {
        students.push({ name,subject });
        res.status(201).json({ message: 'Student added successfully' });
      } else {
        res.status(400).json({ error: 'Invalid role' });
      }
      break;
    }

    case 'DELETE': {
      const { role: deleteRole, name: deleteName } = req.body as {
        role: string;
        name: string;
      };

      if (!deleteName || !deleteRole) {
        res.status(400).json({ error: 'Missing role or name in request body' });
        return;
      }

      if (deleteRole === 'teacher') {
          // Remove teacher by name
        teachers = teachers.filter((teacher) => teacher.name !== deleteName);
        res.status(200).json({ message: 'Teacher removed' });
      } else if (deleteRole === 'student') {
        // Remove student by name
        students = students.filter((student) => student.name !== deleteName);
        res.status(200).json({ message: 'Student removed' });
      } else {
        res.status(400).json({ error: 'Invalid role' });
      }
      break;
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
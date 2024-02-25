import '../styles/App.css';
import { useState } from 'react';
import Header from './Header';
import Summary from './Summary';
import Qualifications from './Qualifications';
// import Education from './Education';
// import Experience from './Experience';

export default function App() {
	const [person, setPerson] = useState({
		name: 'Everett Smith',
		email: 'everettsmith@email.com',
		phone: '123-456-7890',
		city: 'Seattle',
		state: 'WA',
		zipcode: '12345',
		statement: `
Hey there, I'm Alex, and I'm absolutely fascinated by web development. The blend of technology and creativity just lights me up. I've always had a knack for design, so the idea of crafting visually stunning websites while also diving deep into coding to make them function flawlessly is incredibly exciting to me. I'm particularly drawn to the challenge of mastering both the front-end and back-end aspects of development. I want to create not just visually appealing sites but also ensure they're intuitive and user-friendly, with seamless functionality. Ultimately, I see myself in a career where I can keep learning and innovating, pushing the boundaries of what's possible in web development.`,
		qualifications: [
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
			'React',
			'Vite',
			'npm',
			'Git/GitHub',
			'TailwindCSS',
			'NodeJS',
			'MongoDB',
			'Express.js',
			'Next.js',
			'Azure',
		],
	});

	const [school, setSchool] = useState([
		{
			qualification: 'Software Development',
			schoolName: 'Stanford University',
			schoolCity: 'Stanford',
			schoolState: 'CA',
		},
	]);

	const [work, setWork] = useState([
		{
			startDate: '2018',
			endDate: 'Current',
			companyTitle: 'Software Engineer',
			companyName: 'Bing',
			companyCity: 'Bellevue',
			companyState: 'WA',
			duties: [
				'Maintain software functionality',
				'Executing full lifecycle software development',
				'Design software',
				'Collaborating team working skills',
				'Analyzing and modifying existing software',
				'Investigate new technologies',
			],
		},
	]);

	return (
		<>
			<Header person={person} />
			<Summary person={person} />
			<Qualifications person={person} />
			{/* <Education /> */}
			{/* <Experience /> */}
		</>
	);
}

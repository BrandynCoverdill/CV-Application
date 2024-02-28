import '../styles/App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
import Header from './Header';
import Summary from './Summary';
import Qualifications from './Qualifications';
import Education from './Education';
import Experience from './Experience';
import Button from './Button';

export default function App() {
	const [person, setPerson] = useState({
		name: 'Everett Smith',
		email: 'everettsmith@email.com',
		phone: '123-456-7890',
		city: 'Seattle',
		state: 'WA',
		zipcode: '12345',
		statement: `Hey there, I'm Everett, and I'm absolutely fascinated by web development. The blend of technology and creativity just lights me up. I've always had a knack for design, so the idea of crafting visually stunning websites while also diving deep into coding to make them function flawlessly is incredibly exciting to me. I'm particularly drawn to the challenge of mastering both the front-end and back-end aspects of development. I want to create not just visually appealing sites but also ensure they're intuitive and user-friendly, with seamless functionality. Ultimately, I see myself in a career where I can keep learning and innovating, pushing the boundaries of what's possible in web development.`,
		qualifications: [
			{
				key: uuidv4(),
				title: 'HTML',
			},
			{
				key: uuidv4(),
				title: 'CSS',
			},
			{
				key: uuidv4(),
				title: 'JavaScript',
			},
			{
				key: uuidv4(),
				title: 'TypeScript',
			},
			{
				key: uuidv4(),
				title: 'React',
			},
			{
				key: uuidv4(),
				title: 'Vite',
			},
			{
				key: uuidv4(),
				title: 'npm',
			},
			{
				key: uuidv4(),
				title: 'Git/GitHub',
			},
			{
				key: uuidv4(),
				title: 'TailwindCSS',
			},
			{
				key: uuidv4(),
				title: 'NodeJS',
			},
			{
				key: uuidv4(),
				title: 'MongoDB',
			},
			{
				key: uuidv4(),
				title: 'Express.js',
			},
			{
				key: uuidv4(),
				title: 'Next.js',
			},
			{
				key: uuidv4(),
				title: 'Azure',
			},
		],
	});

	const [school, setSchool] = useState([
		{
			key: uuidv4(),
			qualification: 'Software Development',
			schoolName: 'Stanford University',
			schoolCity: 'Stanford',
			schoolState: 'CA',
		},
	]);

	const [work, setWork] = useState([
		{
			key: uuidv4(),
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

	const [isEditing, setIsEditing] = useState(false);

	function handleEdit(e) {
		setIsEditing(true);
	}

	function handleSave(e) {
		setIsEditing(false);
	}

	function handleCancel(e) {
		setIsEditing(false);
	}

	return (
		<>
			<Header person={person} isEditing={isEditing} />
			<Summary person={person} isEditing={isEditing} />
			<Qualifications person={person} isEditing={isEditing} />
			<Education school={school} isEditing={isEditing} />
			<Experience work={work} isEditing={isEditing} />
			<section className='buttons'>
				{!isEditing ? (
					<Button handleClick={handleEdit}>Edit</Button>
				) : (
					<>
						<Button handleClick={handleSave}>Save</Button>
						<Button handleClick={handleCancel}>Cancel</Button>
					</>
				)}
			</section>
		</>
	);
}

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
			startDate: 2018,
			endDate: 'Current',
			companyTitle: 'Software Engineer',
			companyName: 'Bing',
			companyCity: 'Bellevue',
			companyState: 'WA',
			duties: [
				{
					key: uuidv4(),
					title: 'Maintain software functionality',
				},
				{
					key: uuidv4(),
					title: 'Executing full lifecycle software development',
				},
				{
					key: uuidv4(),
					title: 'Design software',
				},
				{
					key: uuidv4(),
					title: 'Collaborating team working skills',
				},
				{
					key: uuidv4(),
					title: 'Analyzing and modifying existing software',
				},
				{
					key: uuidv4(),
					title: 'Investigate new technologies',
				},
			],
		},
	]);

	const [isEditing, setIsEditing] = useState(false);

	const [editPerson, setEditPerson] = useState({...person});
	const [editSchool, setEditSchool] = useState(structuredClone(school));
	const [editWork, setEditWork] = useState(structuredClone(work));

	function handleEdit(e) {
		setIsEditing(true);
	}

	function handleSave(e) {
		setIsEditing(false);
		setPerson(structuredClone(editPerson));
		setSchool(structuredClone(editSchool));
		setWork(structuredClone(editWork));
	}

	function handleCancel(e) {
		setIsEditing(false);
		setEditPerson(structuredClone(person));
		setEditSchool(structuredClone(school));
		setEditWork(structuredClone(work));
	}

	function handleNameChange(e) {
		const updatedName = e.target.value;
		setEditPerson({...editPerson, name: updatedName});
	}

	function handleEmailChange(e) {
		const updatedEmail = e.target.value;
		setEditPerson({...editPerson, email: updatedEmail});
	}

	function handlePhoneChange(e) {
		const updatedPhone = e.target.value;
		setEditPerson({...editPerson, phone: updatedPhone});
	}

	function handleCityChange(e) {
		const updatedCity = e.target.value;
		setEditPerson({...editPerson, city: updatedCity});
	}

	function handleStateChange(e) {
		const updatedState = e.target.value;
		setEditPerson({...editPerson, state: updatedState});
	}

	function handleZipcodeChange(e) {
		const updatedZip = e.target.value;
		setEditPerson({...editPerson, zipcode: updatedZip});
	}

	function handleSummaryChange(e) {
		const updatedSummary = e.target.value;
		setEditPerson({...editPerson, statement: updatedSummary});
	}

	function deleteQualification(id) {
		const updatedQualifications = editPerson.qualifications.filter(
			(qualification) => {
				return qualification.key !== id;
			}
		);
		setEditPerson({...editPerson, qualifications: updatedQualifications});
	}

	function updateQualification(e, id) {
		const updatedQualifications = editPerson.qualifications.filter(
			(qualification) => {
				if (qualification.key === id) {
					qualification.title = e.target.value;
					return qualification;
				}
				return qualification;
			}
		);
		setEditPerson({...editPerson, qualifications: updatedQualifications});
	}

	function addQualification(e) {
		setEditPerson({
			...editPerson,
			qualifications: [
				...editPerson.qualifications,
				{
					key: uuidv4(),
					title: '',
				},
			],
		});
	}

	function handleSubjectChange(e, id) {
		const subject = e.target.value;
		const updatedSchools = editSchool.filter((school) => {
			if (school.key === id) {
				school.qualification = subject;
				return school;
			}
			return school;
		});
		setEditSchool([...updatedSchools]);
	}

	function handleSchoolNameChange(e, id) {
		const name = e.target.value;
		const updatedSchools = editSchool.filter((school) => {
			if (school.key === id) {
				school.schoolName = name;
				return school;
			}
			return school;
		});
		setEditSchool([...updatedSchools]);
	}

	function handleSchoolCityChange(e, id) {
		const city = e.target.value;
		const updatedSchools = editSchool.filter((school) => {
			if (school.key === id) {
				school.schoolCity = city;
				return school;
			}
			return school;
		});
		setEditSchool([...updatedSchools]);
	}

	function handleSchoolStateChange(e, id) {
		const state = e.target.value;
		const updatedSchools = editSchool.filter((school) => {
			if (school.key === id) {
				school.schoolState = state;
				return school;
			}
			return school;
		});
		setEditSchool([...updatedSchools]);
	}

	return (
		<>
			<Header
				person={person}
				editPerson={editPerson}
				isEditing={isEditing}
				handleNameChange={handleNameChange}
				handleEmailChange={handleEmailChange}
				handlePhoneChange={handlePhoneChange}
				handleCityChange={handleCityChange}
				handleStateChange={handleStateChange}
				handleZipcodeChange={handleZipcodeChange}
			/>
			<Summary
				person={person}
				editPerson={editPerson}
				isEditing={isEditing}
				handleSummaryChange={handleSummaryChange}
			/>
			<Qualifications
				person={person}
				editPerson={editPerson}
				isEditing={isEditing}
				deleteQualification={deleteQualification}
				updateQualification={updateQualification}
				addQualification={addQualification}
			/>
			<Education
				school={school}
				editSchool={editSchool}
				isEditing={isEditing}
				handleSubjectChange={handleSubjectChange}
				handleSchoolNameChange={handleSchoolNameChange}
				handleSchoolCityChange={handleSchoolCityChange}
				handleSchoolStateChange={handleSchoolStateChange}
			/>
			<Experience work={work} editWork={editWork} isEditing={isEditing} />
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

import '../styles/Qualifications.css';
import Button from './Button';

export default function Qualifications({ person, isEditing }) {
	if (isEditing) {
		return (
			<section className='qualificationsEdit'>
				<h2>Core Qualifications</h2>
				<ul>
					{person.qualifications.map((qualification) => {
						return (
							<>
								<input type='text' placeholder='Qualification' />
								<button className='deleteBtn'>Delete</button>
							</>
						);
					})}
					<button className='addBtn'>Add new Qualification</button>
				</ul>
			</section>
		);
	} else {
		return (
			<section className='qualifications'>
				<h2>Core Qualifications</h2>
				<ul>
					{person.qualifications.map((qualification) => {
						return <li>{qualification}</li>;
					})}
				</ul>
			</section>
		);
	}
}

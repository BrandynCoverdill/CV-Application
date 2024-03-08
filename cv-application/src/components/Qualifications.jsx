import { v4 as uuidv4 } from 'uuid';
import '../styles/Qualifications.css';

export default function Qualifications({
	person,
	editPerson,
	isEditing,
	deleteQualification,
	updateQualification,
	addQualification,
}) {
	if (isEditing) {
		return (
			<section className='qualificationsEdit'>
				<h2>Core Qualifications</h2>
				<ul>
					{editPerson.qualifications.map((qualification) => {
						return (
							<div className='editList' key={qualification.key}>
								<input
									type='text'
									value={qualification.title}
									onChange={(e) => updateQualification(e, qualification.key)}
								/>
								<button
									className='deleteBtn'
									onClick={() => deleteQualification(qualification.key)}
								>
									Delete
								</button>
							</div>
						);
					})}
				</ul>
				<div className='buttons'>
					<button
						className='addBtn'
						onClick={(e) => {
							addQualification(e);
						}}
					>
						Add new Qualification
					</button>
				</div>
			</section>
		);
	} else {
		return (
			<section className='qualifications'>
				<h2>Core Qualifications</h2>
				<ul>
					{person.qualifications.map((qualification) => {
						return <li key={qualification.key}>{qualification.title}</li>;
					})}
				</ul>
			</section>
		);
	}
}

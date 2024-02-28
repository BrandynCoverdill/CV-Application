import '../styles/Qualifications.css';

export default function Qualifications({person, isEditing}) {
	if (isEditing) {
		return (
			<section className='qualificationsEdit'>
				<h2>Core Qualifications</h2>
				<ul>
					{person.qualifications.map((qualification) => {
						return (
							<div className='editList' key={qualification.key}>
								<input type='text' value={qualification.title} />
								<button className='deleteBtn'>Delete</button>
							</div>
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
						return <li key={qualification.key}>{qualification.title}</li>;
					})}
				</ul>
			</section>
		);
	}
}

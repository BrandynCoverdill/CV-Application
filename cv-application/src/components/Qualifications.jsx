import '../styles/Qualifications.css';

export default function Qualifications({ person, isEditing }) {
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

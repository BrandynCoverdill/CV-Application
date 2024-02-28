import '../styles/Summary.css';

export default function Summary({person, isEditing}) {
	if (isEditing) {
		return (
			<section className='summaryEdit'>
				<h2>Summary Statement</h2>
				<p>
					<textarea
						name='statement'
						id='statement'
						cols='40'
						rows='10'
						placeholder={person.statement}
					></textarea>
				</p>
			</section>
		);
	} else {
		return (
			<section className='summary'>
				<h2>Summary Statement</h2>
				<p>{person.statement}</p>
			</section>
		);
	}
}

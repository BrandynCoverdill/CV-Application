import '../styles/Summary.css';

export default function Summary({
	person,
	editPerson,
	isEditing,
	handleSummaryChange,
}) {
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
						value={editPerson.statement}
						onChange={handleSummaryChange}
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

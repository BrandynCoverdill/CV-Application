import '../styles/Summary.css';

export default function Summary({ person, isEditing }) {
	if (isEditing) {
		return (
			<section className='summary'>
				<h2>Summary Statement</h2>
				<p>
					<textarea
						name='statement'
						id='statement'
						cols='50'
						rows='5'
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

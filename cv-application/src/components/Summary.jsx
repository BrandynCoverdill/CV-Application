import '../styles/Summary.css';

export default function Summary({ person }) {
	return (
		<section className='summary'>
			<h2>Summary Statement</h2>
			<p>{person.statement}</p>
		</section>
	);
}

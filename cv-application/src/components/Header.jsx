import '../styles/Header.css';

export default function Header({ person }) {
	return (
		<section className='header'>
			<h1>{person.name}</h1>
			<div>
				<p>{person.email}</p>
				<p>{person.phone}</p>
				<p>{person.city + ', ' + person.state + ' ' + person.zipcode}</p>
			</div>
		</section>
	);
}

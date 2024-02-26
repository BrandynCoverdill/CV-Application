import '../styles/Header.css';
import states from 'states-us';

export default function Header({ person, isEditing }) {
	if (isEditing) {
		return (
			<section className='header'>
				<div className='border'>
					<input id='nameInput' type='text' placeholder={person.name} />
				</div>
				<div className='header-edit'>
					<p>
						<input type='text' placeholder={person.email} />
					</p>
					<p>
						<input type='text' placeholder={person.phone} />
					</p>
					<p>
						<input type='text' placeholder={person.city} />
						<select name='state' id='state'>
							{states.map((state) => {
								return (
									<option value={state.abbreviation} key={state.abbreviation}>
										{state.abbreviation}
									</option>
								);
							})}
						</select>{' '}
						<input type='text' placeholder={person.zipcode} />
					</p>
				</div>
			</section>
		);
	} else {
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
}

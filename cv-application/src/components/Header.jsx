import '../styles/Header.css';
import states from 'states-us';

export default function Header({person, isEditing}) {
	if (isEditing) {
		return (
			<section className='headerEdit'>
				<div className='border'>
					<h2>Personal Information</h2>
					<div>
						<label htmlFor='nameInput'>Name: </label>
						<input
							type='text'
							id='nameInput'
							placeholder='Everett Smith'
							value={person.name}
						/>
					</div>
					<div>
						<label htmlFor='emailInput'>Email: </label>
						<input
							type='text'
							id='emailInput'
							placeholder='everettsmith@email.com'
							value={person.email}
						/>
					</div>
					<div>
						<label htmlFor='phoneInput'>Phone: </label>
						<input
							type='text'
							id='phoneInput'
							placeholder='123-456-7890'
							value={person.phone}
						/>
					</div>
					<div>
						<label htmlFor='personCityInput'>Address: </label>
						<input
							type='text'
							id='personCityInput'
							placeholder='City'
							value={person.city}
						/>
						<select name='personStateSelect' id='personStateSelect'>
							{states.map((state) => {
								if (person.state === state.abbreviation) {
									return (
										<option
											key={state.abbreviation}
											value={state.abbreviation}
											selected
										>
											{state.abbreviation}
										</option>
									);
								}
								return (
									<option key={state.abbreviation} value={state}>
										{state.abbreviation}
									</option>
								);
							})}
						</select>
					</div>
					<div>
						<label htmlFor='personZip'>Zipcode: </label>
						<input
							type='text'
							id='personZip'
							placeholder='12345'
							value={person.zipcode}
						/>
					</div>
				</div>
				{/* <div className='header-edit'>
					<div className='border'>
						<p>
							<label htmlFor='personStateSelect'>State:</label>
							<select name='state' id='personStateSelect'>
								{states.map((state) => {
									return (
										<option value={state.abbreviation} key={state.abbreviation}>
											{state.abbreviation}
										</option>
									);
								})}
							</select>
							<br />
							<label htmlFor='zipInput'>Zipcode:</label>
							<input id='zipInput' type='text' placeholder={person.zipcode} />
						</p>
					</div>
				</div> */}
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

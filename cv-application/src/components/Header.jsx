import '../styles/Header.css';
import states from 'states-us';

export default function Header({
	person,
	editPerson,
	isEditing,
	handleNameChange,
	handleEmailChange,
	handlePhoneChange,
	handleCityChange,
	handleStateChange,
	handleZipcodeChange,
}) {
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
							value={editPerson.name}
							onChange={handleNameChange}
						/>
					</div>
					<div>
						<label htmlFor='emailInput'>Email: </label>
						<input
							type='text'
							id='emailInput'
							placeholder='everettsmith@email.com'
							value={editPerson.email}
							onChange={handleEmailChange}
						/>
					</div>
					<div>
						<label htmlFor='phoneInput'>Phone: </label>
						<input
							type='text'
							id='phoneInput'
							placeholder='123-456-7890'
							value={editPerson.phone}
							onChange={handlePhoneChange}
						/>
					</div>
					<div>
						<label htmlFor='personCityInput'>Address: </label>
						<input
							type='text'
							id='personCityInput'
							placeholder='City'
							value={editPerson.city}
							onChange={handleCityChange}
						/>
						<select
							name='personStateSelect'
							id='personStateSelect'
							onChange={handleStateChange}
						>
							{states.map((state) => {
								if (editPerson.state === state.abbreviation) {
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
									<option key={state.abbreviation} value={state.abbreviation}>
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
							value={editPerson.zipcode}
							onChange={handleZipcodeChange}
						/>
					</div>
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

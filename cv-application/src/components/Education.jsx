import { Fragment } from 'react';
import states from 'states-us';
import '../styles/Education.css';

export default function Education({
	school,
	editSchool,
	isEditing,
	handleSubjectChange,
	handleSchoolNameChange,
	handleSchoolCityChange,
	handleSchoolStateChange,
	handleAddSchool,
	handleDeleteSchool,
}) {
	if (isEditing) {
		return (
			<section className='educationEdit'>
				<h2>Education</h2>
				{editSchool.map((s) => {
					return (
						<Fragment key={s.key}>
							<div>
								<label htmlFor='schoolQualificationInput'>Subject: </label>
								<input
									type='text'
									id='schoolQualificationInput'
									placeholder='Software Development'
									value={s.qualification}
									onChange={(e) => handleSubjectChange(e, s.key)}
								/>
							</div>
							<div>
								<label htmlFor='schoolNameInput'>School Name: </label>
								<input
									type='text'
									id='schoolNameInput'
									placeholder='Stanford University'
									value={s.schoolName}
									onChange={(e) => handleSchoolNameChange(e, s.key)}
								/>
							</div>
							<div>
								<label htmlFor='schoolCityInput'>School Address: </label>
								<input
									type='text'
									id='schoolCityInput'
									placeholder='Stanford'
									value={s.schoolCity}
									onChange={(e) => handleSchoolCityChange(e, s.key)}
								/>
								<select
									name='schoolStateSelect'
									id='schoolStateSelect'
									onChange={(e) => handleSchoolStateChange(e, s.key)}
								>
									{states.map((state) => {
										if (state.abbreviation === s.schoolState) {
											return (
												<option
													value={state.abbreviation}
													key={state.abbreviation}
													selected
												>
													{state.abbreviation}
												</option>
											);
										}
										return (
											<option
												value={state.abbreviation}
												key={state.abbreviation}
											>
												{state.abbreviation}
											</option>
										);
									})}
								</select>
							</div>
							<button
								type='button'
								className='deleteSchoolBtn'
								onClick={(e) => handleDeleteSchool(e, s.key)}
							>
								Delete School
							</button>
						</Fragment>
					);
				})}
				<div className='buttons' onClick={handleAddSchool}>
					<button type='button'>Add School</button>
				</div>
			</section>
		);
	} else {
		return (
			<section className='education'>
				<h2>Education</h2>
				<div className='schoolList'>
					{school.map((s) => {
						return (
							<div key={s.key}>
								<p>
									<b>{s.qualification}</b> - {s.schoolName}
								</p>
								<p>{s.schoolCity + ', ' + s.schoolState}</p>
							</div>
						);
					})}
				</div>
			</section>
		);
	}
}

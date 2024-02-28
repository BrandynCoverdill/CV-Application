import {Fragment} from 'react';
import states from 'states-us';
import '../styles/Education.css';

export default function Education({school, isEditing}) {
	if (isEditing) {
		return (
			<section className='educationEdit'>
				<h2>Education</h2>
				{school.map((s) => {
					return (
						<Fragment key={s.key}>
							<div>
								<label htmlFor='schoolQualificationInput'>Subject: </label>
								<input
									type='text'
									id='schoolQualificationInput'
									placeholder='Software Development'
									value={s.qualification}
								/>
							</div>
							<div>
								<label htmlFor='schoolNameInput'>School Name: </label>
								<input
									type='text'
									id='schoolNameInput'
									placeholder='Stanford University'
									value={s.schoolName}
								/>
							</div>
							<div>
								<label htmlFor='schoolCityInput'>School Address: </label>
								<input
									type='text'
									id='schoolCityInput'
									placeholder='Stanford'
									value={s.schoolCity}
								/>
								<select name='schoolStateSelect' id='schoolStateSelect'>
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
							<button type='button' className='deleteSchoolBtn'>
								Delete School
							</button>
						</Fragment>
					);
				})}
				<div className='buttons'>
					<button type='button'>Add School</button>
				</div>
			</section>
		);
	} else {
		return (
			<section className='education'>
				<h2>Education</h2>
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
			</section>
		);
	}
}

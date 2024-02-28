import {Fragment} from 'react';
import states from 'states-us';
import '../styles/Experience.css';

export default function Experience({work, isEditing}) {
	const currentYear = new Date().getFullYear();
	if (isEditing) {
		return (
			<section className='experienceEdit'>
				<h2>Work Experience</h2>
				{work.map((w) => {
					return (
						<Fragment key={w.key}>
							<div>
								<label htmlFor='yearStartedInput'>Year Started: </label>
								<input
									type='number'
									min='1900'
									max={currentYear}
									placeholder='2017'
									id='yearStartedInput'
									value={w.startDate}
								/>
							</div>
							<div>
								<label htmlFor='yearEndedInput'>Year Ended: </label>
								{w.endDate === 'Current' ? (
									<>
										<input
											type='number'
											min={1900}
											max={currentYear}
											placeholder='2020'
											id='yearEndedInput'
										/>
										<input
											type='checkbox'
											id='currentlyWorking'
											name='currentlyWorking'
											value='Current'
											checked
										/>
										<label htmlFor='currentlyWorking'>
											I currently work here
										</label>
									</>
								) : (
									<>
										<input
											type='number'
											min={1900}
											max={currentYear}
											placeholder='2020'
											id='yearEndedInput'
											value={w.endDate}
										/>
										<label htmlFor='currentlyWorking'>
											I currently work here
										</label>
									</>
								)}
							</div>
							<div>
								<label htmlFor='companyTitleInput'>Title at Company: </label>
								<input
									type='text'
									placeholder='Software Engineer'
									value={w.companyTitle}
								/>
							</div>
							<div>
								<label htmlFor='companyNameInput'>Name of Company: </label>
								<input
									type='text'
									id='companyNameInput'
									placeholder='Bing'
									value={w.companyName}
								/>
							</div>
							<div>
								<label htmlFor='companyCityInput'>Company Address: </label>
								<input
									type='text'
									id='companyCityInput'
									placeholder='Bellevue'
									value={w.companyCity}
								/>
								<select name='companyStateSelect' id='compantStateSelect'>
									{states.map((state) => {
										if (state.abbreviation === w.companyState) {
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
							<div>
								<ul>
									{w.duties.map((duty) => {
										return (
											<Fragment key={duty.key}>
												<li>
													<input
														type='text'
														placeholder='Maintain software functionality'
														value={duty.title}
													/>
													<button type='button'>Delete Job Duty</button>
												</li>
											</Fragment>
										);
									})}
								</ul>
							</div>
							<div>
								<button type='button'>Add Job Duty</button>
							</div>
							<div className='buttons'>
								<button type='button'>Add Job</button>
							</div>
						</Fragment>
					);
				})}
			</section>
		);
	} else {
		return (
			<section className='experience'>
				<h2>Work Experience</h2>
				{work.map((w) => {
					return (
						<div key={w.id}>
							<p>
								{w.startDate} - {w.endDate}
							</p>
							<p>
								<b>{w.companyTitle}</b>
							</p>
							<p>
								{w.companyName} - {w.companyCity}, {w.companyState}
							</p>
							<ul>
								{w.duties.map((duty) => {
									return <li key={duty.key}>{duty.title}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</section>
		);
	}
}

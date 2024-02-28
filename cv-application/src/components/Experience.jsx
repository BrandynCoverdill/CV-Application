import {Fragment} from 'react';
import states from 'states-us';
import '../styles/Experience.css';

export default function Experience({
	work,
	editWork,
	isEditing,
	handleYearStartChange,
	handleYearEndChange,
	handleCompanyTitleChange,
	handleCompanyNameChange,
	handleCompanyCityChange,
	handleCompanyStateChange,
	handleCompanyDutyChange,
	handleDeleteJobDuty,
	handleDeleteJob,
	handleAddJobDuty,
	handleAddJob,
}) {
	if (isEditing) {
		return (
			<section className='experienceEdit'>
				<h2>Work Experience</h2>
				{editWork.map((w) => {
					return (
						<Fragment key={w.key}>
							<div>
								<label htmlFor='yearStartedInput'>Year Started: </label>
								<input
									type='number'
									min='1900'
									placeholder='2017'
									id='yearStartedInput'
									value={w.startDate}
									onChange={(e) => handleYearStartChange(e, w.key)}
								/>
							</div>
							<div>
								<label htmlFor='yearEndedInput'>Year Ended: </label>
								<input
									type='number'
									min='1900'
									placeholder='2020'
									id='yearEndedInput'
									value={w.endDate}
									onChange={(e) => handleYearEndChange(e, w.key)}
								/>
							</div>
							<div>
								<label htmlFor='companyTitleInput'>Title at Company: </label>
								<input
									type='text'
									placeholder='Software Engineer'
									value={w.companyTitle}
									onChange={(e) => handleCompanyTitleChange(e, w.key)}
								/>
							</div>
							<div>
								<label htmlFor='companyNameInput'>Name of Company: </label>
								<input
									type='text'
									id='companyNameInput'
									placeholder='Bing'
									value={w.companyName}
									onChange={(e) => handleCompanyNameChange(e, w.key)}
								/>
							</div>
							<div>
								<label htmlFor='companyCityInput'>Company Address: </label>
								<input
									type='text'
									id='companyCityInput'
									placeholder='Bellevue'
									value={w.companyCity}
									onChange={(e) => handleCompanyCityChange(e, w.key)}
								/>
								<select
									name='companyStateSelect'
									id='compantStateSelect'
									onChange={(e) => handleCompanyStateChange(e, w.key)}
								>
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
														onChange={(e) =>
															handleCompanyDutyChange(e, duty.key, w.key)
														}
													/>
													<button
														type='button'
														onClick={(e) => handleDeleteJobDuty(e, duty.key)}
													>
														Delete Job Duty
													</button>
												</li>
											</Fragment>
										);
									})}
								</ul>
							</div>
							<div>
								<button
									type='button'
									onClick={(e) => handleAddJobDuty(e, w.key)}
								>
									Add Job Duty
								</button>
							</div>
							<div>
								<button
									type='button'
									onClick={(e) => handleDeleteJob(e, w.key)}
								>
									Delete Job
								</button>
							</div>
						</Fragment>
					);
				})}
				<div className='buttons'>
					<button type='button' onClick={handleAddJob}>
						Add Job
					</button>
				</div>
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

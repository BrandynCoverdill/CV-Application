import {Fragment} from 'react';
import '../styles/Education.css';

export default function Education({school}) {
	return (
		<section className='education'>
			<h2>Education</h2>
			{school.map((s) => {
				return (
					<Fragment key={s.key}>
						<p>
							<b>{s.qualification}</b> - {s.schoolName}
						</p>
						<p>{s.schoolCity + ', ' + s.schoolState}</p>
					</Fragment>
				);
			})}
		</section>
	);
}

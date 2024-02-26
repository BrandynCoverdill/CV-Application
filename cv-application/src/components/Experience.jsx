import '../styles/Experience.css';

export default function Experience({ work, isEditing }) {
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
								return <li>{duty}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</section>
	);
}

import '../styles/Experience.css';

export default function Experience({ work }) {
	return (
		<section className='experience'>
			<h2>Work Experience</h2>
			{work.map((w) => {
				return (
					<div key={w.id}>
						<p>
							{w.startDate} - {w.endDate}
						</p>
						<p>{w.companyTitle}</p>
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

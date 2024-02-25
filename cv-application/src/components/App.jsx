import '../styles/App.css';
import Header from './Header';
import Summary from './Summary';
import Qualifications from './Qualifications';
import Education from './Education';
import Experience from './Experience';

export default function App() {
	return (
		<>
			<Header />
			<Summary />
			<Qualifications />
			<Education />
			<Experience />
		</>
	);
}

import { Header } from './components/Header';
import { Button } from '@nextui-org/react';

function App() {
	return (
		<>
			<Header />
			<hr className='my-4' />
			<Button color='primary'>Button</Button>
		</>
	);
}

export default App;

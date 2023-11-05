import Body from './Components/Body/Main'
import Header from './Components/Header/Main'

const App = () => {
	return (
		<>
			<head>
				<meta charset='UTF-8' />
				<link rel='icon' type='image/svg+xml' href='/vite.svg' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>React Weather App</title>
			</head>
			<body>
				<Header />
				<Body />
			</body>
		</>
	)
}

export default App

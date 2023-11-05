import { useCallback, useEffect, useState } from 'react'

export const useDocumentTitle = t => {
	useEffect(() => {
		document.title = t
		return () => (document.title = 'React Weather App')
	}, [t])
}

export const useDarkMode = () => {
	const getInitialmode = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			return true
		} else {
			return false
		}
	}
	const [darkmode, setDarkMode] = useState(getInitialmode())
	const toggleDarkMode = useCallback(() => {
		setDarkMode(prevMode => !prevMode)
	}, [])
	useEffect(() => {
		if (darkmode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkmode])
	return {
		darkmode,
		toggleDarkMode,
	}
}

import { useState, useEffect } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import '/src/stylesheets/elements/ScrollToTop.css'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () =>
			window.pageYOffset > 1500 ? setIsVisible(true) : setIsVisible(false)

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<a className='ScrollToTop' href='#top' data-show={isVisible}>
			<RiArrowUpSLine />
		</a>
	)
}

export default ScrollToTop

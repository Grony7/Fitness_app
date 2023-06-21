import { useState } from 'react'
import styles from './Hamburger.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu.jsx'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	const logoutHandler = () => {}

  return <div className={styles.wrapper}>
		<button onClick={() => setIsShow(!isShow)}>
			{isShow ? <IoClose color={'white'}/> : <CgMenuRight color={'white'} />}
		</button>
		<Menu isShow={isShow} />
	</div>
}

export default Hamburger

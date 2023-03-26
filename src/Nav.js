import React, { useEffect } from 'react'
import "./nav.css"

function Nav() {

    const [show, hendleShow] = React.useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            hendleShow(true)
        } else {
            hendleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img
                    className='nav_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" alt="" />
                <img className='nav_avtar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}


export default Nav
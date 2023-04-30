import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import style from './MainHeader.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import ReactResizeDetector from 'react-resize-detector'

function MainHeader() {

    const nav = useRef(null);

    const menuController = () => {
        nav.current.style.display == 'none' ? nav.current.style.display = 'flex' : nav.current.style.display = 'none';
    }

    const adjustMenu = () => {
        window.innerWidth > 600 ? nav.current.style.display = 'flex' : nav.current.style.display = 'none';
    };

    useEffect(() => {
        const closeMenu = () => {
            nav.current.style.display = 'none';
        };

        const conditionToCloseMenu = (event) => {
            if (!event.target.classList.contains('menu'))
                closeMenu();
        };

        document.addEventListener('click', conditionToCloseMenu);
        document.addEventListener('scroll', closeMenu);

        return () => {
            document.removeEventListener('click', conditionToCloseMenu);
            document.removeEventListener('scroll', closeMenu);
        };
    }, []);

    return (
        <section>
            <ReactResizeDetector handleWidth onResize={adjustMenu} />
            <header className={style.mainHeader} >
                <h1><Link to='/' >Portal Games</Link></h1>
                <AiOutlineMenu onClick={menuController} className='menu' />
                <ul ref={nav} className='menu' >
                    <li><Link to='#' className='menu' >Lançamentos</Link></li>
                    <li><Link to='#' className='menu' >Comunidade</Link></li>
                    <li><Link to='#' className='menu' >Suporte</Link></li>
                </ul>
            </header>
        </section>
    )
}

export default MainHeader
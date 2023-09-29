import hamburger from '/icons/hamburger.svg'
import headerLogo from '/images/header-logo.svg'

import { navLinks } from '../constant'

export default function Navbar() {
  return (
    <header className='absolute z-10 w-full py-8 padding-x'>
      <nav className='flex items-center justify-between max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-lg leading-normal font-montserrat text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='Hambuger' width={24} height={24} />
        </div>
      </nav>
    </header>
  )
}

import './NavBar.css'

const navItems = [
    { name: 'about', href: '#about' },
    { name: 'experiences', href: '#experiences' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
]

// Iterate over navItems and create an anchor tag
const NavBar = () => {
    return (
        <nav className='navbar'>
            {navItems.map(item => (
                <a key={item.href} href={item.href}>{item.name}</a>
            ))}
        </nav>
    )
}

export default NavBar;
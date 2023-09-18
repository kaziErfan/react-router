
const Navbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' }
      ];
      
    return (
        <nav>
            <ul>
            {
                routes.map(route => <li key={route.id}><a href={`route.path`}>{route.name}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;
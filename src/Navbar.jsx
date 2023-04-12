

const Navbar = () => {
    return (
        <ul style={{listStyleType: "none", display: "flex", justifyContent: "flex-end", gap: "10px"}}>
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/Signup'}>Signup</a></li>
            <li><a href={'/Login'}>Login</a></li>
        </ul>
    )
}

export default Navbar
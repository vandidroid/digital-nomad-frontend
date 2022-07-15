import "./Menu.css"

function Menu({items}) {
return (
    <header className="Menu">
        <nav>
            <ul>
                <li><span>H</span>ome</li>
            {items.map(item => <li>{item}</li>)}
            </ul>
        </nav>
    </header>
)
} 
export default Menu;
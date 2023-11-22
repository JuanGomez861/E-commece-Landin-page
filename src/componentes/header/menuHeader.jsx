import './menuHeader.css'
export function Menu({menuClass}){
    return(
        <nav className={menuClass}>
                    <li className="nav_item" >Collections</li>
                    <li className="nav_item" >Men</li>
                    <li className="nav_item" >Women</li>
                    <li className="nav_item" >About</li>
                </nav>
    )
}
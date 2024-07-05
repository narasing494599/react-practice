export default function TabButton({ children, onSelect, isTabActive }) {
    return (
        <li>
            <button className={isTabActive ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}
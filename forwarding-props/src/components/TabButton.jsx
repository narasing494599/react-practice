export default function TabButton({ children, isTabActive, ...prop }) {
    return (
        <li>
            <button className={isTabActive ? 'active' : ''} {...prop}>{children}</button>
        </li>
    );
}
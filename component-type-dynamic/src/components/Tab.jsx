export default function Tab({Button, children, Tagname = "menu"}) {
    return(
        <>
        <Tagname>
            {Button}
        </Tagname>
        {children}
        </>
    )
}

type ButtonProps = {
    type: 'link' | 'button'
    children: React.ReactNode
    href?: string
    style?: string
    class?: string
}

export default function Button(props : ButtonProps){
    const {type, children, style, href} = props;

    return (
        <>
            {type == "link" ? ( <a href={href} className={style}>{children}</a>) : (<button className={style}>{children}</button>)}
        </>
    )
}
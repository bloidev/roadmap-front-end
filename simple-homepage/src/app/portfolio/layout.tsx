import Navbar from "../ui/Navbar";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps){
    return <>
        <Navbar />
        {props.children}
    </>
}
import Navbar from "@/ui/Navbar";
import DropdownDefault from "@/ui/components/DropdownDefault";
import Head from "next/head";

type BlogLayoutProps = {
    children: React.ReactNode
}


export default function BlogLayout(props : BlogLayoutProps){
    const { children } = props;

    return (
        <main className="px-3 sm:px-16 md:px-16 lg:px-24 xl:px-64 bg-slate-200 dark:bg-slate-800 min-h-screen">
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Blog de Simple Homepage" />
                <meta name="author" content="Simple Homepage" />
                <meta name="keywords" content="Simple Homepage, Blog" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#000000" />
            </Head>            
            <Navbar /> 
            {children}            
        </main>
    )
}
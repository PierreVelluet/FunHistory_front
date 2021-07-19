import React  from "react";
import Header from "./Header/Header";



const Layout = ({children}:{ children: React.ReactNode }) => {

    return (
        <>
        <Header />
        {children}
        <div>Footer</div>
        </>
    )
}

    


export default Layout;
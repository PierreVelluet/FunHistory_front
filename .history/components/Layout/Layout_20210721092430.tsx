import React  from "react";
import Header from "./Header/Header";



const Layout = ({children}:{ children: React.ReactNode }) => {

    return (
        <>
        <Header />
        <div style={{marginLeft: "270px"}}>
        {children}
        </div>
        </>
    )
}

    


export default Layout;
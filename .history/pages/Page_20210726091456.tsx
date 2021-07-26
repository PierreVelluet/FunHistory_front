import react from "react";

import Layout from "./";

const Page = (props:any) =>  {

}

Page.withLayout = (page, myCustomData) => <Layout {...myCustomData}>{page}</Layout>
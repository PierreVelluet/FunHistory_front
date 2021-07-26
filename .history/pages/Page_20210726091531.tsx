import react from "react";

import Layout from "../components/Layout/Layout";

const Page = (props:any) =>  {

}

Page.withLayout = (page:any, myCustomData:any) => <Layout {...myCustomData}>{page}</Layout>
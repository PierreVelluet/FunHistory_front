import react from "react";

import Layout from "../components/";

const Page = (props:any) =>  {

}

Page.withLayout = (page, myCustomData) => <Layout {...myCustomData}>{page}</Layout>
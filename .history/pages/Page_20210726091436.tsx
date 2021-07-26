import react from "react";

import Layout from "antd/lib/layout/layout";

const Page = (props:any) =>  {

}

Page.withLayout = (page, myCustomData) => <Layout {...myCustomData}>{page}</Layout>
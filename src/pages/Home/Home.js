import React from 'react';
import NavTitle from '../../components/Navbar/NavTitle';
import LayoutContent from '../../components/Content/LayoutContent';
import { Grid } from '../../scripts/js/vendor/ui-core';
const Home = () => {
    return (<>
        <NavTitle title="Dashboard" subtitle="" />
        <LayoutContent>
            <Grid lg={12}>
                <div>Home</div>
            </Grid>
        </LayoutContent>
    </>)
};
export default Home

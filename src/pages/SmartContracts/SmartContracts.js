import React from 'react';
import NavTitle from '../../components/Navbar/NavTitle';
import LayoutContent from '../../components/Content/LayoutContent';
import { Grid } from '../../scripts/js/vendor/ui-core';
const SmartContracts = () => {
    return (<>
        <NavTitle title="Smart Contracts" subtitle="View all assets you have created or you invested with." />
        <LayoutContent>
            <Grid lg={12}>Smart Contracts</Grid>
        </LayoutContent>
    </>)
};
export default SmartContracts;

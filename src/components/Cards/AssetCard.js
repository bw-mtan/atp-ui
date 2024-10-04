import React from 'react';
import React from 'react';
import { Grid } from '../../scripts/js/vendor/ui-core';
const AssetCard = () => {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid lg={4} xs={8}>

                xs=4

                </Grid>
            <Grid lg={8} xs={4}>
                <Item>
                    xs=8
    </Item>
            </Grid>
            <Grid lg={12} xs={12}>
                <Item>
                    xs=12
    </Item>
            </Grid>
        </Grid>
    )
}
export default AssetCard;

import React from 'react';
import { Container, Grid } from '../../scripts/js/vendor/ui-core';
const LayoutContent = ({ children }) => {

    return (
        <Container maxWidth='xl'>
            <Grid                
                container
                spacing={2}
            >
                {children}
            </Grid>
        </Container>
    )
};
export default LayoutContent;

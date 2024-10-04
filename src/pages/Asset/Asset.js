import React from 'react';
import NavTitle from '../../components/Navbar/NavTitle';
import LayoutContent from '../../components/Content/LayoutContent';
import { Grid, List, ListItem, ListItemText, ListItemButton, ListItemAvatar, Badge, Avatar, Button, Divider, Stack } from '../../scripts/js/vendor/ui-core';
import { useNavigate } from 'react-router-dom';
import './assets.css';
const Assets = () => {
    const navigate = useNavigate();
    const assetsData = [{
        avatar: 'Ab',
        symbol: 'ABF',
        company: 'Americas Bond Family',
        action: 'Action Required',
        currency: 'USD',
        qty: 100,
        price: 2700.00,
        nominal_value: 270000.00,
        yield: 3.5,
        return1M: 2.35,
        return3M: 4.22,
        return1Y: 4.40,
        comments: null
    },
    {
        avatar: 'Cd',
        symbol: 'CDK',
        company: 'CDK FundFamily',
        action: 'Action Required',
        currency: 'USD',
        qty: 300,
        price: 4000.00,
        nominal_value: 1200000.00,
        yield: 1.2,
        return1M: 3.00,
        return3M: 4.00,
        return1Y: 3.22,
        comments: null
    },
    {
        avatar: 'Ef',
        symbol: 'EFT',
        company: 'EFT Holdings LLC',
        action: 'View',
        currency: 'USD',
        qty: 300,
        price: 4000.00,
        nominal_value: 1200000.00,
        yield: 3.2,
        return1M: null,
        return3M: null,
        return1Y: null,
        comments: 'recently created.'
    },
    {
        avatar: 'Gh',
        symbol: 'GHI',
        company: 'GHI Trend Micro',
        action: 'Action Required',
        currency: 'USD',
        qty: 100,
        price: 4000.00,
        nominal_value: 400000.00,
        yield: 4.2,
        return1M: 3.00,
        return3M: 4.00,
        return1Y: 3.22,
        comments: null
    }
    ];
    const navigateToNewAsset = () => {
        navigate('/createasset');
    };
    const actionRequired = () => {
        navigate('/reviewasset');
    };
    return (<>
        <NavTitle title="Assets" subtitle="View all assets you have created or you invested with." />
        <LayoutContent>
            <Grid lg={12}>
                <div className="action-button">
                    <Button color="primary" variant="contained" onClick={navigateToNewAsset}>
                        New Assets
                        </Button>
                </div>
                {
                    assetsData.map(x => <div className="li-border">
                        <List>
                            <ListItem divider>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Badge
                                            anchorOrigin={{
                                                horizontal: 'right',
                                                vertical: 'bottom'
                                            }}
                                            color="success"
                                            overlap="circular"
                                            variant="dot"
                                        >
                                            <Avatar>
                                                {x.avatar}
                                            </Avatar>
                                        </Badge>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={x.symbol}
                                        secondary={x.company}
                                    />
                                </ListItemButton>
                                <Button className="button-width" variant="outlined" onClick={actionRequired}>
                                    {x.action}
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Stack
                                    direction={{
                                        sm: 'row',
                                        xs: 'column'
                                    }}
                                >
                                    <div className="list-column">
                                        <span className="list-title">Currency</span>
                                        <div className="secondary-text">{x.currency}</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Qty</span>
                                        <div className="secondary-text">{x.qty}</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Price</span>
                                        <div className="secondary-text">{x.price}</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Nominal Value</span>
                                        <div className="secondary-text">{x.nominal_value}</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Bond Yield</span>
                                        <div className="secondary-text">{x.yield}%</div>
                                    </div>
                                    <div className="divider-column divider">
                                    </div>
                                    {!x.comments && <>
                                    <div className="list-column">
                                        <span className="list-title">Return(1M)</span>
                                        <div className="secondary-text">{x.return1M}%</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Return(3M)</span>
                                        <div className="secondary-text">{x.return3M}%</div>
                                    </div>
                                    <div className="list-column">
                                        <span className="list-title">Return(1Y)</span>
                                        <div className="secondary-text">{x.return1Y}%</div>
                                    </div>
                                    </>
                                    }
                                    {x.comments &&
                                     <div className="list-column">
                                     <span className="list-title">&nbsp;</span>
                                     <div className="secondary-text">{x.comments}</div>
                                 </div>
                                    }
                                </Stack>

                            </ListItem>
                        </List>
                    </div>)
                }             
            </Grid>
        </LayoutContent>
    </>)
};
export default Assets;

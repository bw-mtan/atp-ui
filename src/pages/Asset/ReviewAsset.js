import React from 'react';
import NavTitle from '../../components/Navbar/NavTitle';
import LayoutContent from '../../components/Content/LayoutContent';
import { Grid, TextField, Button, FormControl, InputLabel, Select, Menu, MenuItem, MenuList} from '../../scripts/js/vendor/ui-core';
import './newasset.css';

const ReviewAsset = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const getIssuerName = (e) => {
        console.log('getIssuerName', e.target);
    }
    const getInvestor = (e) => {
        console.log('getInvestor', e.target);
    }
    const getSmartContract = (e) => {
        console.log('getSmartContract', e.target);
    }
    const handler=(e)=>{
        console.log('target', e.currentTarget)
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
      };
    return (<>
        <NavTitle title="Review Asset" subtitle="You can review an asset that can be modified. You can revise the fields, approve, transfer, and reject." />
        <LayoutContent>
            <Grid lg={9} className="grid-top-spacing" colspacing={2} justifyContent="flex-start">
              
                <div className="pl-1">
                    <Grid lg={12} container spacing={2}>
                        <Grid lg={12} textAlign="left"> <h4>Asset Data</h4></Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="ISIN Number"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={6}><TextField
                            className="stretch-textfield"
                            labelPlacement="top"
                            label="Asset Description"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={6} textAlign="left">
                            <FormControl
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <InputLabel id="select-id-1">
                                    Issuer Name
  </InputLabel>
                                <Select
                                    label="IssuerName"
                                    labelId="issuername"
                                    onChange={getIssuerName}
                                    value=""
                                >
                                    <MenuItem value={0}>
                                        AB Holding Company
    </MenuItem>
                                    <MenuItem value={1}>
                                        CD Financial LLC
    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid lg={6}>
                        <FormControl
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <InputLabel id="select-id-1">
                                    Investor Name
  </InputLabel>
                                <Select
                                    label="Investor Name"
                                    labelId="investorname"
                                    onChange={getInvestor}
                                    value=""
                                >
                                    <MenuItem value={0}>
                                        Charter Holding Company
    </MenuItem>
                                    <MenuItem value={1}>
                                        Delta Financial LLC 
    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Price per token"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={6}><TextField
                            fullWidth
                            labelPlacement="top"
                            label="Nominal Value"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Qty"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={6}><TextField
                            fullWidth
                            labelPlacement="top"
                            label="Maturity Date"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={12} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Yield"
                            variant="outlined"
                        /></Grid>
                        <Grid lg={12} textAlign="left">
                        <FormControl
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <InputLabel id="select-id-1">
                                    Smart Contract Template
  </InputLabel>
                                <Select
                                    label="Smart Contract Template"
                                    labelId="smartcontracttemplate"
                                    onChange={getSmartContract}
                                    value=""
                                >
                                    <MenuItem value={0}>
                                        SC-001 - Standard Bond Token Transfer Only
                                        
    </MenuItem>
                                    <MenuItem value={1}>
                                    SC-002 - Complete DvP
    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid lg={12} spacing={2} className="stack-horizontal-end">
                            <Button variant="outlined" className="mr-20">
                                Cancel
</Button>
                            <Button disabled variant="contained">
                                Submit
</Button>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid lg={3} className="grid-top-spacing">
                <div><strong>Please review the following information</strong> and choose the following options to take some action.</div>
                <Button onClick={handler}>
    More Actions...
  </Button>
  <Menu
    anchorEl={anchorEl}
    onClose={handleClose}
    open={open}
  >
    <MenuList>
      <MenuItem>
        Approve
      </MenuItem>
      <MenuItem>
        Reject
      </MenuItem>
      <MenuItem>
       Transfer
      </MenuItem>
      <MenuItem>
        Redemption
      </MenuItem>
    </MenuList>
  </Menu>
            </Grid>                    
        </LayoutContent>
    </>
    );
};
export default ReviewAsset;

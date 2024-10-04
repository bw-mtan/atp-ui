import React, { useState } from 'react';
import NavTitle from '../../components/Navbar/NavTitle';
import LayoutContent from '../../components/Content/LayoutContent';
import { Grid, RadioGroup, Radio, FormControlLabel, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '../../scripts/js/vendor/ui-core';
import Verification from './Verification';

import './newasset.css';

const NewAsset = () => {
    const [state, setState] = useState({
        isin: null,
        issuerId: null,
        issuerName: null,
        investorId: null,
        investorName: null,
        scTemplateId: null,
        scTemplateName: null,
        price: 0.00,
        tokenQty: 0,
        nominalValue: 0.00,
        description: null,
        yield: null,
        maturityDate: null,
        scTemplateId: null
    });
    const [verify, setVerify]=useState(false);
    const issuerList = ['AB Holding Company', 'CD Financial LLC'];
    const investorList = ['Charter Holding Company', ' Delta Financial LLC '];
    const contractList = ['SC-001 - Standard Bond Token Transfer Only', 'SC-002 - Complete DvP'];

    const getIssuerName = (e) => {
        console.log('getIssuerName', issuerList[e.target.value]);
        setState({
            ...state,
            issuerId: e.target.value,
            issuerName: issuerList[e.target.value]
        });
    }
    const getInvestor = (e) => {
        console.log('getInvestor', e.target);
        setState({
            ...state,
            investorId: e.target.value,
            investorName: investorList[e.target.value]
        });
    }
    const getSmartContract = (e) => {
        setState({
            ...state,
            scTemplateId: e.target.value,
            scTemplateName: contractList[e.target.value]
        });
    }
    const DisplayIssuers = () => {
        return (
            <Select
                label="Issuer Name"
                labelId="issuername"
                onChange={getIssuerName}
                value={state.issuerId}>
                {
                    issuerList.map((x, idx) => <MenuItem key={idx} value={idx}>{x}</MenuItem>)
                }
            </Select>
        )
    };
    const DisplayInvestors = () => {
        return (
            <Select
                label="Investor Name"
                labelId="investorname"
                onChange={getInvestor}
                value={state.investorId}>
                {
                    investorList.map((x, idx) => <MenuItem key={idx} value={idx}>{x}</MenuItem>)
                }
            </Select>
        )
    };
    const DisplaySmartContracts = () => {
        return (
            <Select
                label="Smart Contract Name"
                labelId="smartcontractname"
                onChange={getSmartContract}
                value={state.scTemplateId}>
                {
                    contractList.map((x, idx) => <MenuItem key={idx} value={idx}>{x}</MenuItem>)
                }
            </Select>
        )
    };
    const changeIsin = (e) => {
        setState({
            ...state,
            isin: e.target.value
        });
    };
    const changePrice = (e) => {
        setState({
            ...state,
            price: e.target.value
        });
    }
    const changeQty = (e) => {
        setState({
            ...state,
            tokenQty: e.target.value
        });
    }
    const changeNominalValue = (e) => {
        setState({
            ...state,
            nominalValue: e.target.value
        });
    }
    const changeYield = (e) => {
        setState({
            ...state,
            yield: e.target.value
        });
    }
    const changeDescription = (e) => {
        setState({
            ...state,
            description: e.target.value
        });
    }
    const submitAsset = () => {
        console.log('asset', state);
        setVerify(true);
    }
    return (<>
        <NavTitle title="Create Asset" subtitle="You can create an asset that can be managed on our platform. It lays the foundational for potential future transactions and investment opportunities." />
        <LayoutContent>
            <Grid lg={9} className="grid-top-spacing" colspacing={2} justifyContent="flex-start">
                <div className="stack-horizontal">
                    <RadioGroup
                        defaultValue="yes"
                        name="allow-cookies-option-group"
                        row
                    >
                        <Grid lg={6}>
                            <div className="box-selection">
                                <div className="stack-horizontal pl-1 pr-1"><h5>Auto-fill fields</h5><FormControlLabel
                                    control={<Radio />}
                                    label=""
                                    value="yes"
                                /></div>
                                <p className="pl-1 pr-1">Create a security like a digital certificate of ownership for regulated assets with an ISIN number. </p>
                                <div className="pt-1 pl-1 pr-1">
                                    <TextField
                                        labelPlacement="top"
                                        label="ISIN Number"
                                        variant="outlined"
                                        type="number"
                                    />
                                    <Button className="retrieve-text">
                                        Retrieve
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid lg={6}>
                            <div className="box-selection">
                                <div className="stack-horizontal pl-1 pr-1"><h5>Manual fields</h5><FormControlLabel
                                    control={<Radio />}
                                    label=""
                                    value="no"
                                /></div>
                                <p className="pl-1 pr-1">Fill up the form and we'll submit it manually to our offline registration. </p>
                            </div>
                        </Grid>
                    </RadioGroup>
                </div>
                <div className="pl-1">
                    <FormControl>
                    <Grid lg={12} container spacing={2}>
                        <Grid lg={12} textAlign="left"> <h4>Asset Data</h4></Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="ISIN Number"
                            variant="outlined"
                            type="number"
                            required
                            onChange={changeIsin}
                        /></Grid>
                        <Grid lg={6}><TextField
                            className="stretch-textfield"
                            labelPlacement="top"
                            label="Asset Description"
                            variant="outlined"
                            required
                            onChange={changeDescription}
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

                                <DisplayIssuers />
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
                                <DisplayInvestors />
                            </FormControl>
                        </Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Price per token"
                            variant="outlined"
                            type="number"
                            onChange={changePrice}
                            required
                        /></Grid>
                        <Grid lg={6}><TextField
                            fullWidth
                            labelPlacement="top"
                            label="Nominal Value"
                            type="number"
                            variant="outlined"
                            onChange={changeNominalValue}
                            required
                        /></Grid>
                        <Grid lg={6} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Qty"
                            variant="outlined"
                            type="number"
                            onChange={changeQty}
                            required
                        /></Grid>
                        <Grid lg={6}><TextField
                            fullWidth
                            labelPlacement="top"
                            label="Maturity Date"
                            variant="outlined"
                            required
                        /></Grid>
                        <Grid lg={12} textAlign="left"><TextField fullWidth
                            labelPlacement="top"
                            label="Yield"
                            variant="outlined"
                            onChange={changeYield}
                            required
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
                                <DisplaySmartContracts />
                            </FormControl>
                        </Grid>
                        <Grid lg={12} spacing={2} className="stack-horizontal-end">
                            <Button variant="outlined" className="mr-20">
                                Cancel
</Button>
                            <Button variant="contained" onClick={submitAsset}>
                                Submit
</Button>
                        </Grid>
          
                    </Grid>
                    </FormControl>
                </div>
            </Grid>
           {verify && <Verification /> }
        </LayoutContent>
    </>
    );
};
export default NewAsset;

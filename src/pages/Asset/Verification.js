import React, { useRef, useEffect, useState } from 'react';
import { CollectionsTwoToneIcon, Grid } from '../../scripts/js/vendor/ui-core';
// import QRCode from '../../scripts/js/qrcode.js';
import { Helmet } from 'react-helmet';
import './verification.css';
const Verification = () => {
    const ref = useRef();
    const [loaded, setLoaded] = useState(false);
    const [asteps, setasteps] = useState([false, false, false])
    const [asteps2, setasteps2] = useState([false, false, false])
    const genqrcode="https://etherscan.io/tx/0xd31e41e777d0f2c828d983904ce37ed52c5a1eb1150b290d2aa0aa3ab5fb57fd";
    const steps = [{
        title: 'KYC',
        substeps: [
            'Verifying Customer Information',
            'Verifying Govt Issued Id',
            'Conducting enhanced Due Diligence'
        ]
    }, {
        title: 'AML',
        substeps: [
            'PEP Sanction Checks',
            'Watchlist screening',
            'Verifying Suspense Transactions'
        ]
    }];
    useEffect(() => {
        if (ref.current) {
            setLoaded(true);
        }
    }, []);
    useEffect(() => {
        if (ref.current && loaded && asteps2[0] && asteps2[1] && asteps2[2]) {
            setLoaded(false);
            const qrcode = new QRCode(ref.current, {
                width: 200,
                height: 200
            });
            qrcode.makeCode(genqrcode);
        }
    }, [loaded, asteps2]);
    const DisplaySteps = ({ stepNo }) => {
        const DisplaySubSteps = ({ ss, delay }) => {
            setTimeout(() => {
                if (!asteps[ss]) {
                    setasteps({ ...asteps, [ss]: true });
                    return <></>;
                }
            }, delay)
            if (!asteps[ss]) return <></>;
            return <li className={asteps[ss] ? "pulsate" : ""}> {steps[stepNo].substeps[ss]}</ li>
        }
        const stepDone = asteps[0] && asteps[1] && asteps[2] ? "StepProgress-item is-done" : "StepProgress-item current";
        return (
            <div className={stepDone}><div className="step-title">{steps[stepNo].title}</div>
                <ul className="no-style">
                    {stepNo === "0" && <DisplaySubSteps ss="0" delay={100} />}
                    {stepNo === "0" && <DisplaySubSteps ss="1" delay={1000} />}
                    {stepNo === "0" && <DisplaySubSteps ss="2" delay={999} />}
                </ul>
            </div>
        );
    }
    const DisplaySteps2 = ({ stepNo }) => {
        const DisplaySubSteps = ({ ss, delay }) => {
            setTimeout(() => {
                if (!asteps2[ss]) {
                    setasteps2({ ...asteps2, [ss]: true });
                    return <></>;
                }
            }, delay)
            if (!asteps2[ss]) return <></>;
            return <li className={asteps2[ss] ? "pulsate" : ""}> {steps[stepNo].substeps[ss]}</ li>
        }
        const stepDone = asteps2[0] && asteps2[1] && asteps2[2] ? "StepProgress-item is-done" : "StepProgress-item current";
        return (
            <div className={stepDone}><div className="step-title">{steps[stepNo].title}</div>
                <ul className="no-style">
                    {stepNo === "1" && <DisplaySubSteps ss="0" delay={100} />}
                    {stepNo === "1" && <DisplaySubSteps ss="1" delay={1500} />}
                    {stepNo === "1" && <DisplaySubSteps ss="2" delay={1499} />}
                </ul>
            </div>
        );
    };
    const openEtherscan=()=>{
        window.open(genqrcode, '_blank').focus();
    }
    return (
        <Grid lg={3} className="grid-top-spacing">
            <div className="verification-title"><h4>Verification Steps</h4></div>
            <div className="wrapper">
                <ul className="StepProgress">
                    <DisplaySteps stepNo="0" />
                    {asteps[0] && asteps[1] && asteps[2] && <DisplaySteps2 stepNo="1" />}
                    {asteps2[0] && asteps2[1] && asteps2[2] && <div className="StepProgress-item is-done"><div className="step-title">Successfully verified</div></div>}
                    {/*
                    <div className="StepProgress-item is-done"><div className="step-title">KYC</div>
                        <ul className="no-style">
                            <li className="pulsate">Verifying Customer Information</li>
                            <li>Verifying Govt Issued Id </li>
                            <li>Conducting enhanced Due Diligence </li>
                        </ul>
                    </div>
                    <div className="StepProgress-item is-done has-failed"><div className="step-title">AML</div>
                        <ul className="no-style">
                            <li>PEP Sanction Checks</li>
                            <li>Watchlist screening </li>
                            <li>Verifying Suspense Transactions </li>
                        </ul>
                    </div>
                    <div className="StepProgress-item is-done has-failed"><div className="step-title">Verification Failed</div></div>
                    */}
                </ul>
            </div>
            <div id="qrcode-gen" className="qrcode" ref={ref} onClick={openEtherscan}></div>
        </Grid>
    )
}
export default Verification;


import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import { Grid, getTheme } from './scripts/js/vendor/ui-core';
import {
  datePickerOptions,
} from './scripts/js/vendor/ui-core/datepicker';;
import 'dayjs/locale/en-gb';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Assets from './pages/Assets/Asset';
import SmartContracts from './pages/SmartContracts/SmartContracts';
import Transactions from './pages/Transactions/Transactions';
import Whitelist from './pages/Whitelist/Whitelist';
import NewAsset from './pages/Assets/NewAsset';
import ReviewAsset from './pages/Assets/ReviewAsset';

const theme = getTheme({ options: [datePickerOptions] }); // in case of multiple options:  { options: [datePickerOptions, otherOptions, <...>] }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/assets" element={<Assets />} />
            <Route path="/createasset" element={<NewAsset />} />
            <Route path="/reviewasset" element={<ReviewAsset />} />

            <Route path="/contracts" element={<SmartContracts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

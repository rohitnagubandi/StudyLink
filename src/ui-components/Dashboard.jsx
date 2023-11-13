/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import NavBarHeader2 from "./NavBarHeader2";
import NavBarHeader from "./NavBarHeader";
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from "react";
import StudyGroupCardCollection from "./StudyGroupCardCollection";

function Dashboard() {

  return (
    <div>
      <NavBarHeader/>
      <StudyGroupCardCollection />
    </div>
  );
}

export default withAuthenticator(Dashboard);
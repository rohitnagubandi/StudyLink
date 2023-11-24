/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, Button } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import StudyGroupForm from "./StudyGroupForm";

export default function SLNavBarHeader(props) {
  const { profileCard, profileImage, overrides, ...rest } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toggleForm = () => {
    setOpen(!open);
  };

  const updateProfileImage = (newImage) => {
    setProfileImage(newImage);
  };
  const dashboardOnClick = useNavigateAction({
    type: "url",
    url: "/dashboard",
  });
  const createaNewStudyGroupOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const contactOnClick = useNavigateAction({ type: "url", url: "/contact" });
  // const { overrides, ...rest } = props;

  const logoutOnClick = async () => {
    try {
      await Auth.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Flex
      gap="40px"
      direction="row"
      width="100vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SLNavBarHeader")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Dashboard"
          onClick={() => {
            dashboardOnClick();
          }}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create Study Group"
          onClick={handleClickOpen}
        ></Button>
          {open && (
            <StudyGroupForm open={open} toggleForm={toggleForm} />
          )}
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Contact"
          onClick={() => {
            contactOnClick();
          }}
        ></Button>
        
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="notification"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      < Link to="/profile">
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={`${profileImage}?${new Date().getTime()}`} 
          alt="profile image"
          key={profileImage}
          {...getOverrideProps(overrides, "image")}
        />
        </Link>
        <Link to="/">
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Log Out"
          onClick={logoutOnClick}
        ></Button>
        </Link>
      </Flex>
    </Flex>
  );
}
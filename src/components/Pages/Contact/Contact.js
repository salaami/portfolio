import React from "react";
import SplitLayoutYellow from '../../Layout/SplitLayoutYellow'
import ContactText from "./ContactText"
import Image from "../../Image/Image";
import getInTouch from "../../../assets/pictures/getInTouch.jpg"

var Contact = () => {
  return (
    <SplitLayoutYellow contentLeft={<Image src={getInTouch}/>} contentRight={<ContactText />} />
  )
}

export default Contact;
"use client";

import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("8c2a5883-9123-4cbd-bd7f-3e9be32b5aa6");
  }

  render() {
    return null;
  }
}
export default CrispChat;

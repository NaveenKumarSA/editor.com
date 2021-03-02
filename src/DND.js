import React, { Component } from "react";
import styled from "styled-components";
import Dragable from "./Dragable";
import Dropable from "./Dropable";

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 3px;
`;

const dropableStyle = {
  backgroundcolor: "#555",
  width: "250px",
  height: "400px",
  margin: "32px",
};

export default class DND extends Component {
  render() {
    return (
      <Wrapper>
        <Dropable id="dr1" style={dropableStyle}>
          <Dragable id="item1">
            {" "}
            <Item>Drag me </Item>
          </Dragable>
          <Dragable id="Item2">
            {" "}
            <Item>Drag me </Item>
          </Dragable>
        </Dropable>
        <Dropable id="dr2" style={dropableStyle}>
          <Dragable></Dragable>
        </Dropable>
      </Wrapper>
    );
  }
}

import React, { useState } from "react";
import styled from "styled-components";
import { Tree } from "antd";
import "antd/dist/antd.css";
import {
  FolderOutlined,
  FileOutlined,
  FileExcelOutlined,
  KeyOutlined,
  NumberOutlined,
} from "@ant-design/icons";

const { DirectoryTree } = Tree;

const TreeComponent = ({ handleSelect, data }) => {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isColumnOpen, setIsColumnOpen] = useState(false);
  return (
    <Stree>
      <Snodetop>
        <SEdittext>Data Explorer</SEdittext>
        <Slibtree
          onSelect={(e, info) => {
            handleSelect(info.node);
            // console.log("node", e, info.node);
          }}
          treeData={data}
          multiple
        />
        <SheadSampleandtrain
          onClick={() => {
            handleSelect("sample_submission.csv");
          }}
        >
          <FileExcelOutlined />
          <div style={{ marginLeft: "5px" }}>sample_submission.csv</div>
        </SheadSampleandtrain>
        <SheadSampleandtrain
          onClick={() => {
            handleSelect("train_labels.csv");
          }}
        >
          <FileExcelOutlined />
          <div style={{ marginLeft: "5px" }}>train_labels.csv</div>
        </SheadSampleandtrain>
      </Snodetop>
      <Snodebottom>
        <SEdittext>Summary</SEdittext>
        <Sfile>
          <Shead onClick={() => setIsFileOpen(!isFileOpen)}>
            <FolderOutlined />
            <div style={{ marginLeft: "5px" }}>400k files</div>
          </Shead>
          {isFileOpen && (
            <Scontent>
              <Srow>
                <Stext>
                  <FileOutlined />
                  <div style={{ marginLeft: "5px" }}>.dcm</div>
                </Stext>
                <Svalue>400k</Svalue>
              </Srow>
              <Srow>
                <Stext>
                  <FileExcelOutlined />
                  <div style={{ marginLeft: "5px" }}>.csv</div>
                </Stext>
                <Svalue>2</Svalue>
              </Srow>
            </Scontent>
          )}
        </Sfile>
        <Scolumn>
          <Shead onClick={() => setIsColumnOpen(!isColumnOpen)}>
            <FileExcelOutlined />
            <div style={{ marginLeft: "5px" }}>4 columns</div>
          </Shead>
          {isColumnOpen && (
            <Scontent>
              <Srow>
                <Stext>
                  <KeyOutlined />
                  <div style={{ marginLeft: "5px" }}>Id</div>
                </Stext>
                <Svalue>2</Svalue>
              </Srow>
              <Srow>
                <Stext>
                  <NumberOutlined />
                  <div style={{ marginLeft: "5px" }}>Decimal</div>
                </Stext>
                <Svalue>1</Svalue>
              </Srow>
              <Srow>
                <Stext>
                  <NumberOutlined />
                  <div style={{ marginLeft: "5px" }}>Integer</div>
                </Stext>
                <Svalue>1</Svalue>
              </Srow>
            </Scontent>
          )}
        </Scolumn>
      </Snodebottom>
    </Stree>
  );
};

export default TreeComponent;
const Slibtree = styled(DirectoryTree)`
  background-color: lightblue;
  font-size: 1em;
`;
const Stree = styled.div`
  width: 23%;
  height: 100%;
  background-color: grey;
`;

const Snodetop = styled.div`
  width: 100%;
  height: 67.8%;
  background-color: lightblue;
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  margin: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const Snodebottom = styled.div`
  width: 100%;
  height: 30%;
  background-color: lightgreen;
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  margin: 5px;
`;

const SEdittext = styled.div`
  font-weight: bold;
  font-size: 1.5em;
`;

const Sfile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
`;

const Scolumn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
`;

const Shead = styled.div`
  display: flex;
  cursor: pointer;
`;

const Scontent = styled.div`
  padding-left: 20px;
`;

const Stext = styled.div`
  display: flex;
  cursor: pointer;
`;

const Svalue = styled.div``;

const Srow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SheadSampleandtrain = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 35px;
`;

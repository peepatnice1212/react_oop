import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Charttrade from "./Charttrade";
import * as sample_submission from "../sample_submission.json";
import * as train_labels from "../train_labels.json";
import Table from "./Table";
import { KeyOutlined, NumberOutlined } from "@ant-design/icons";

const Chartdisplay = ({ dataselect }) => {
  const [chartData, setChartData] = useState(sample_submission.default);
  useEffect(() => {
    if (dataselect === "sample_submission.csv") {
      setChartData(sample_submission.default);
    } else if (dataselect === "train_labels.csv") {
      setChartData(train_labels.default);
    }
  }, [dataselect]);
  // console.log("sample", sample_submission);
  // console.log("trainlabel", train_labels);
  const [pageSelect, setPageSelect] = useState("Detail");
  return (
    <SmainChart>
      <SChartdistop>{dataselect}</SChartdistop>
      <SChartdismid>
        <Stextmid
          onClick={() => {
            setPageSelect("Detail");
          }}
        >
          Detail
        </Stextmid>
        <Stextmid
          onClick={() => {
            setPageSelect("Compact");
          }}
        >
          Compact
        </Stextmid>
        <Stextmid
          onClick={() => {
            setPageSelect("Column");
          }}
        >
          Column
        </Stextmid>
      </SChartdismid>
      <SChartdisbottom>
        {pageSelect === "Detail" ? (
          <div>
            <Charttrade data={chartData} dataselect={dataselect} />
            <Seditbox>
              <KeyOutlined style={{ marginRight: "5px", fontSize: "20px" }} />
              <Sbox>BraTS21ID</Sbox>
              <NumberOutlined
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              <Sbox>MGMT_value</Sbox>
            </Seditbox>
            <Table data={chartData} />
          </div>
        ) : pageSelect === "Column" ? (
          <Charttrade data={chartData} dataselect={dataselect} />
        ) : (
          <div>
            <Seditbox>
              <KeyOutlined style={{ marginRight: "5px", fontSize: "20px" }} />
              <Sbox>BraTS21ID</Sbox>
              <NumberOutlined
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              <Sbox>MGMT_value</Sbox>
            </Seditbox>
            <Table data={chartData} />
          </div>
        )}
      </SChartdisbottom>
    </SmainChart>
  );
};

export default Chartdisplay;

const SmainChart = styled.div`
  width: 90%;
  height: 100%;
  background-color: grey;
  overflow: hidden;
`;

const SChartdistop = styled.div`
  width: 98.7%;
  height: 10%;
  background-color: lightyellow;
  padding: 15px;
  font-weight: bold;
  font-size: 2em;
  margin: 5px;
  margin-left: 10px;
`;

const SChartdisbottom = styled.div`
  width: 98.7%;
  height: 78.7%;
  background-color: lightpink;
  padding: 15px;
  margin: 5px;
  overflow-y: scroll;
  margin-left: 10px;
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

const SChartdismid = styled.div`
  width: 98.7%;
  height: 10;
  background-color: lightsalmon;
  padding: 15px;
  margin: 5px;
  margin-left: 10px;
  font-size: 1.5em;
  display: flex;
`;

const Stextmid = styled.div`
  width: 10%;
  margin-left: 10px;
  cursor: pointer;
  margin-left: 200px;
`;

const Sbox = styled.div`
  width: 300px;
  height: 50px;
`;

const Seditbox = styled.div`
  display: flex;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 350px;
`;

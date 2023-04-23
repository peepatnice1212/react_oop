import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { KeyOutlined, NumberOutlined } from "@ant-design/icons";

const Charttrade = ({ data, dataselect }) => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    if (!data) return;
    let lessthan101sam = 0;
    let lessthan202sam = 0;
    let lessthan302sam = 0;
    let lessthan403sam = 0;
    let lessthan503sam = 0;
    let lessthan604sam = 0;
    let lessthan704sam = 0;
    let lessthan805sam = 0;
    let lessthan905sam = 0;
    let lessthan1006sam = 0;
    let Mgvaluesam = 0;
    let lessthan101 = 0;
    let lessthan202 = 0;
    let lessthan303 = 0;
    let lessthan404 = 0;
    let lessthan505 = 0;
    let lessthan606 = 0;
    let lessthan707 = 0;
    let lessthan808 = 0;
    let lessthan909 = 0;
    let lessthan1010 = 0;
    let Mgvalue = 0;
    let Mgvalue1 = 0;

    if (dataselect == "sample_submission.csv") {
      data.map((each) => {
        if (parseFloat(each.MGMT_value) <= 0.5) {
          Mgvaluesam = Mgvaluesam + 1;
        }
        if (parseFloat(each.BraTS21ID) <= 101.5) {
          lessthan101sam = lessthan101sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 202.0) {
          lessthan202sam = lessthan202sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 302.5) {
          lessthan302sam = lessthan302sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 403.0) {
          lessthan403sam = lessthan403sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 503.5) {
          lessthan503sam = lessthan503sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 604.0) {
          lessthan604sam = lessthan604sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 704.5) {
          lessthan704sam = lessthan704sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 805.0) {
          lessthan805sam = lessthan805sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 905.5) {
          lessthan905sam = lessthan905sam + 1;
        } else if (parseFloat(each.BraTS21ID) <= 1006.0) {
          lessthan1006sam = lessthan1006sam + 1;
        }
      });
      let result_BraTS21ID = [
        ["", "count"],
        ["1.00-101.50", lessthan101sam],
        ["101.50-202.00", lessthan202sam],
        ["202.00-302.50", lessthan302sam],
        ["302.50-403.00", lessthan403sam],
        ["403.00-503.50", lessthan503sam],
        ["503.50-604.00", lessthan604sam],
        ["604.00-704.50", lessthan704sam],
        ["704.50-805.00", lessthan805sam],
        ["805.00-905.50", lessthan905sam],
        ["905.50-1006.00", lessthan1006sam],
      ];

      let result_MGMT_value = [
        ["", "count"],
        ["0.50-0.50", Mgvaluesam],
      ];
      setChartData({
        BraTS21ID: result_BraTS21ID,
        MGMT_value: result_MGMT_value,
      });
    } else if (dataselect == "train_labels.csv") {
      data.map((each) => {
        if (parseFloat(each.MGMT_value) <= 0.1) {
          Mgvalue = Mgvalue + 1;
        } else if (parseFloat(each.MGMT_value) <= 1.0) {
          Mgvalue1 = Mgvalue1 + 1;
        }

        if (parseFloat(each.BraTS21ID) <= 101.0) {
          lessthan101 = lessthan101 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 202.0) {
          lessthan202 = lessthan202 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 303.0) {
          lessthan303 = lessthan303 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 404.0) {
          lessthan404 = lessthan404 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 505.0) {
          lessthan505 = lessthan505 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 606.0) {
          lessthan606 = lessthan606 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 707.0) {
          lessthan707 = lessthan707 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 808.0) {
          lessthan808 = lessthan808 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 909.0) {
          lessthan909 = lessthan909 + 1;
        } else if (parseFloat(each.BraTS21ID) <= 1010.0) {
          lessthan1010 = lessthan1010 + 1;
        }
      });
      let result_BraTS21ID = [
        ["", "count"],
        ["0.00-101.00", lessthan101],
        ["101.00-202.00", lessthan202],
        ["202.00-303.00", lessthan303],
        ["303.00-404.00", lessthan404],
        ["404.00-505.00", lessthan505],
        ["505.00-606.00", lessthan606],
        ["606.00-707.00", lessthan707],
        ["707.00-808.00", lessthan808],
        ["808.00-909.00", lessthan909],
        ["909.00-1010.00", lessthan1010],
      ];

      let result_MGMT_value = [
        ["", "count"],
        ["0.00-0.10", Mgvalue],
        ["0.90-1.00", Mgvalue1],
      ];

      setChartData({
        BraTS21ID: result_BraTS21ID,
        MGMT_value: result_MGMT_value,
      });
    }
  }, [data]);
  // console.log("chartdata", chartData);
  return (
    <Smain>
      <SEdit>
        <KeyOutlined style={{ fontSize: "30px", width: "50px" }} />
        <Stext>BraTS21ID</Stext>
      </SEdit>
      <Chart
        width={"1150px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={chartData?.BraTS21ID}
        style={{ marginBottom: "40px" }}
      />
      <SEdit>
        <NumberOutlined style={{ fontSize: "30px", width: "50px" }} />
        <Stext>MGMT_value</Stext>
      </SEdit>
      <Chart
        width={"1150px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={chartData?.MGMT_value}
        style={{ marginBottom: "40px" }}
      />
    </Smain>
  );
};

export default Charttrade;
const Smain = styled.div`
  justify-content: center;
`;

const Stext = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SEdit = styled.div`
  display: flex;
`;

import { useState } from "react";
import styled from "styled-components";
import Display from "./Component/Display";
import TreeComponent from "./Component/TreeComponent";
import { handledata } from "./Mockdata";
import Chartdisplay from "./Component/Chartdisplay";
import React from "react";
import data from "./listtree.json";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.State = {
//       dataselect: "sample_submission.csv",
//     };
//   }

//   render() {
//     return (
//       <Smain>
//         <TreeComponent handleSelect={handleSelect} data={data} />
//         {dataselect.title ? (
//           <Display dataselect={this.handleSelect} handleSelect={handleSelect} />
//         ) : (
//           <Chartdisplay dataselect={dataselect} />
//         )}
//       </Smain>
//     );
//   }
// }

const App = () => {
  const [dataselect, setDataSelect] = useState("sample_submission.csv");
  const handleSelect = (value) => {
    setDataSelect(value);
  };
  console.log("dataselect", dataselect);

  // const [data, setData] = useState([
  //   { title: "Test", key: "Test", children: handledata(50, 0) },
  //   {
  //     title: "Train",
  //     key: "Train",
  //     children: handledata(50, 1),
  //   },
  // ]);
  return (
    <Smain>
      <TreeComponent handleSelect={handleSelect} data={data} />
      {dataselect.title ? (
        <Display dataselect={dataselect} handleSelect={handleSelect} />
      ) : (
        <Chartdisplay dataselect={dataselect} />
      )}
    </Smain>
  );
};

export default App;
const Smain = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: lightgrey;
  padding: 5px;
  overflow: hidden;
`;

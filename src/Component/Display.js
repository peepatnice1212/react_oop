import React from "react";
import styled from "styled-components";
import "../App.css";
import foldericon from "../icon/folder.png";
import documenticon from "../icon/document.png";
import { handleGetAllImages } from "./All_image";

const images = handleGetAllImages();
// const Allimg = images.flat();
// console.log(Allimg);
const Display = ({ dataselect, handleSelect }) => {
  console.log("concat", dataselect?.title.split(".")[0].concat(".png"));
  return (
    <Sdisplay>
      <Sdistop>{dataselect.title}</Sdistop>

      <Sdisbottom
        className={dataselect.title?.slice(0, 5) === "Image" ? "showImage" : ""}
      >
        {dataselect.title?.slice(0, 5) === "Image" ? (
          <img
            src={
              images[0][dataselect?.title.split(".")[0].concat(".png")]?.default
            }
          />
        ) : (
          <Sboxcontainer>
            {dataselect.children?.map((each, i) => {
              // console.log("rrr", each, i);
              // console.log("sss", dataselect.children);
              return (
                <Seachbox
                  key={i}
                  onClick={() => {
                    handleSelect(each);
                  }}
                >
                  <img
                    src={
                      each.title.slice(0, 5) === "Image"
                        ? documenticon
                        : foldericon
                    }
                    style={{ width: "50px" }}
                  ></img>
                  <div style={{ marginTop: "10px" }}>{each.title}</div>
                </Seachbox>
              );
            })}
          </Sboxcontainer>
        )}
      </Sdisbottom>
    </Sdisplay>
  );
};

export default Display;
const Sdisplay = styled.div`
  width: 90%;
  height: 100%;
  background-color: grey;
  overflow: hidden;
`;
const Sdistop = styled.div`
  width: 98.7%;
  height: 10%;
  background-color: lightyellow;
  padding: 15px;
  font-weight: bold;
  font-size: 2em;
  margin: 5px;
  margin-left: 10px;
`;
const Sdisbottom = styled.div`
  width: 98.7%;
  height: 87.8%;
  background-color: lightpink;
  padding: 15px;
  margin: 5px;
  overflow-y: scroll;
  &.showImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

const Seachbox = styled.div`
  width: 150px;
  height: 150px;
  border: double;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  flex-direction: column;
`;

const Sboxcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
`;

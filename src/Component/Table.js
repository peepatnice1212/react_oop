import React from "react";
import styled from "styled-components";

const Table = ({ data }) => {
  return (
    <div>
      {data?.map((each) => {
        return (
          <Srows>
            <Sbox>{each.BraTS21ID}</Sbox>
            <Sbox>{each.MGMT_value}</Sbox>
          </Srows>
        );
      })}
    </div>
  );
};

export default Table;
const Srows = styled.div`
  display: flex;
  justify-content: center;
`;

const Sbox = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-style: solid;
`;

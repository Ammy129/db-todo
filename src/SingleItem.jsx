import React from "react";
import styled from "styled-components";

const SingleItem = ({
  id,
  item,
  strike,
  strikeThrough,
  deleteItem,
  editItem,
}) => {
  return (
    <Wrapper style={{ background: `${strike ? "#FFF08B" : "white"}` }}>
      <p className={strike ? "strike-through" : ""}>{item}</p>
      <div className="icons">
        <i className="fas fa-pen edit" onClick={() => editItem(id)}></i>
        <img
          src="./images/strike.svg"
          alt="strikethrough icon"
          onClick={() => strikeThrough(id)}
        />
        <i className="fas fa-trash delete" onClick={() => deleteItem(id)}></i>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: rgb(255, 255, 255);
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 1rem 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 10rem;
  box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.05);
  letter-spacing: 2px;
  transition: 250ms ease-in-out;
  text-transform: capitalize;

  .icons {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .icons img {
    width: 30px;
    cursor: pointer;
  }
  i {
    color: #777777;
    cursor: pointer;
    font-size: 1.15rem;
  }

  .edit:hover {
    color: #0cc00c;
  }

  .delete:hover {
    color: #fc3d3d;
  }

  .strike-through {
    color: var(--purple);
    text-decoration: line-through;
    font-weight: bold;
  }
`;

export default SingleItem;

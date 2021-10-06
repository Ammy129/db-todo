import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleItem from "./SingleItem";
import gsap from "gsap";

const Todo = ({ user, setUser }) => {
  useEffect(() => {
    gsap.to(".todo-section", {
      opacity: 1,
      delay: 0.2,
      duration: 0.6,
      ease: "power3.in",
    });
  }, []);

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  };
  const getTodo = () => {
    return localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : "";
  };
  const [todoList, setTodoList] = useState(getTodo());
  const [inputVal, setInputVal] = useState("");
  const [editId, setEditId] = useState("");
  const [btn, setBtn] = useState("Add");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const submitted = e => {
    e.preventDefault();
    if (inputVal && !isEdit) {
      const id = new Date().getTime().toString();
      const newItem = {
        id,
        item: inputVal,
        strike: false,
      };

      setTodoList(prevList => {
        return [newItem, ...prevList];
      });

      setInputVal("");
    } else if (inputVal && isEdit) {
      const newList = [...todoList];
      const item = newList.find(item => item.id === editId);
      item.item = inputVal;
      setTodoList(newList);
      setIsEdit(false);
      setEditId("");
      setBtn("Add");
      setInputVal("");
    }
  };

  const strikeThrough = id => {
    const newList = [...todoList];
    const item = newList.find(item => item.id === id);
    item.strike = !item.strike;
    setTodoList(newList);
  };

  const deleteItem = id => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  const editItem = id => {
    setEditId(id);
    const item = todoList.find(item => item.id === id);
    setInputVal(item.item);
    setBtn("Update");
    setIsEdit(true);
  };

  return (
    <Wrapper className="todo-section">
      <header>
        <p onClick={logout}> Logout</p>
      </header>
      <h1>{user}'s To-do List</h1>
      <form onSubmit={submitted}>
        <div className="input-group">
          <input
            type="text"
            onChange={e => setInputVal(e.target.value)}
            value={inputVal}
          />
        </div>

        <button className="btn" type="submit">
          {btn}
        </button>
      </form>
      {todoList.length === 0 && (
        <div className="items-wrapper">
          <h2>Start Adding Your Todos Here.</h2>
        </div>
      )}

      {todoList.length > 0 && (
        <>
          <p className="count">COUNT : {todoList.length}</p>

          <div className="items-wrapper">
            {todoList.map(todo => (
              <SingleItem
                key={todo.id}
                {...todo}
                strikeThrough={strikeThrough}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            ))}
          </div>
          <button className="btn clearbtn" onClick={() => setTodoList([])}>
            Clear All
          </button>
        </>
      )}

      <img src="./images/legs.svg" className="legs" alt="legs" />
      <img src="./images/todo-image1.svg" className="img" alt="legs" />
      <img src="./images/todo-image2.svg" className="img2" alt="legs" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  padding-bottom: 8rem;

  .legs {
    position: absolute;
    top: -4rem;
    width: 310px;
    left: -45px;
  }
  .img2 {
    position: fixed;
    bottom: 5rem;
    width: 150px;
    right: 5rem;
  }
  .img {
    position: fixed;
    bottom: 5rem;
    width: 180px;
    left: 3rem;
  }

  .count {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    font-weight: bold;
    color: #444444;
  }

  header {
    height: 60px;
    text-align: right;
    padding-top: 1.3rem;

    p {
      color: #333;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  h1 {
    font-size: 2.7rem;
  }

  form {
    width: 90%;
    margin: 2.5rem auto;
    max-width: 700px;
    position: relative;
    display: flex;
    gap: 5rem;
    justify-content: space-between;

    .input-group {
      width: 100%;
    }
  }
  .btn {
    padding: 0.4rem 1.2rem;
    font-size: 1.3rem;
  }
  .btn :hover {
  }

  .clearbtn {
    background: #333;
    margin-top: 3rem;
  }

  .items-wrapper {
    width: 90%;
    margin: 4rem auto 0;
    max-width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default Todo;

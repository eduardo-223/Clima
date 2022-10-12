import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
}

  ul {
    margin-left: 300px;
    margin-bottom: 20px;
    width: 200%;
    display: flex;
    gap: 0 20px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 200px;
  height: 165px;
  background-color: #9bddff;
  border-radius: 4px;
  box-shadow: 0px 5px 3px 0px rgb(0 0 0 / 20%);
  backdrop-filter: blur(50px);

  p{
    span{
        font-weight: 600;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

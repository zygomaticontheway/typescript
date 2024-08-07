import styled from "@emotion/styled";

interface ITaskItem {
  isLast: boolean;
}

export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: first baseline;
  margin: auto;
  width: 100%;
  /* top: 50px; */
  margin-top: 50px;
`;

export const Title = styled.h1``;

export const InputFormContainer = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const InputForm = styled.input`
  min-width: 500px;
  max-width: 700px;
  margin-right: 5px;
`;

export const InputButton = styled.button``;

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  justify-content: space-between;
  padding: 4px;
`;
export const TaskItem = styled.div<ITaskItem>`
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  color: ${({ isLast }) => (isLast ? "darkblue" : "rgb(102 102 102)")};
`;
export const TaskRemoveButton = styled.button`
  background-color: transparent;
  border: none;
`;

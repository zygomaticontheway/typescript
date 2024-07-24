import { useFormik } from "formik";
import { TaskRemoveButton, TaskItem, TasksContainer, InputButton, InputForm, InputFormContainer, Title, ToDoListContainer } from "./styles";
import { useState } from "react";
import * as Yup from 'yup';
import { v4 } from 'uuid';


interface IFormValues {
    inputData: string
}

interface ITask {
    id: string,
    taskText: string
}


export default function ToDoList() {

    const [taskList, setTaskList] = useState<ITask[]>([]);

    const schema = Yup.object().shape({
        inputData: Yup
        .string()
        .required('type smthn')
    })

    const formik = useFormik({
        initialValues: {
            inputData: ''
        } as IFormValues,
        validationSchema:schema,
        validateOnChange: false,
        onSubmit: (values: IFormValues, { resetForm }) => {
            console.log(values);
            setTaskList((prevValue) => [...prevValue, {id: v4(), taskText: values.inputData}])
            resetForm()
        }
    })

    const removeTask = (taskToRemove: ITask) => {
        setTaskList(taskList.filter(task => task !== taskToRemove))
    }

    const taskListOutput = taskList.map((task) => {
        return (
            <TasksContainer key={v4()}>
                <TaskItem >{task.taskText}</TaskItem>
                <TaskRemoveButton onClick={() => removeTask(task)}>❌</TaskRemoveButton>
            </TasksContainer>
        )
    })

    return (
        <ToDoListContainer>
            <Title>ToDo list from consultation 5 📋</Title>
            <InputFormContainer onSubmit={formik.handleSubmit}>
                <InputForm onChange={formik.handleChange} name='inputData' value={formik.values.inputData} placeholder="input task"></InputForm>
                <InputButton type="submit" >add task</InputButton>
            </InputFormContainer>
            {taskListOutput}
        </ToDoListContainer>
    )
}

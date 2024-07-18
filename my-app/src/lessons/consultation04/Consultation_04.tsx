import { useState } from 'react'
import MyButton from '../../components/myButton/MyButton'
import {PageWrapper} from './/styles'
import {UserCard} from './/styles'
import {Avatar} from './/styles'
import {InfoContainer} from './/styles'
import {UserTitle} from './/styles'
import {UserInfo} from './/styles'


function Consultation_04 () {

    const [userData, setUserData] = useState<any> (undefined);
    
    const randomUserUrl: string = "https://randomuser.me/api"
// у promise 3 может быть статуса:
//1. pending - запрос отправлен, но ответ еще не пришел
//2. fulfilled - ответ пришел и он положительный. В нашем примере нам придут данные пользователя
//3. reject - ответ пришел, но он отрицательный, т.е. приходит ошибка
    const getRandomUser = async () => {
        const response = await fetch (randomUserUrl, {
            method: "GET"
          });
        const result = await response.json();
        console.log(result.results[0]);
        

        if(response.ok){
            //тут действия по успешному ответу на запрос
            setUserData(result.results[0]);
        } else{
            // тут обрабатывать ошибку
        }
    }

    return (
        <PageWrapper>
            <UserCard>
                <Avatar src={userData?.picture?.large} alt="User avatar" />
                <InfoContainer className="info-container">
                    <UserTitle className="user-title">Name: </UserTitle>
                    <UserInfo className="user-info">{userData?.name?.title} {userData?.name?.first} {userData?.name?.last}</UserInfo>
                </InfoContainer>
                <InfoContainer className="info-container">
                    <UserTitle className="user-title">Email: </UserTitle>
                    <UserInfo className="user-info">{userData?.email}</UserInfo>
                </InfoContainer>
                <InfoContainer className="info-container">
                    <UserTitle className="user-title">Phone: </UserTitle>
                    <UserInfo className="user-info"> {userData?.phone}</UserInfo>
                </InfoContainer>
                <MyButton type='button' name='Get Random User' onClick={getRandomUser}/>
            </UserCard>
        </PageWrapper>
    )
}
export default Consultation_04;
/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import React from 'react';
import { HomeContainer, HomeWrapper } from '../../styles/stylePages/styledHome/Home.Styled';
import { currentUser } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { H1 } from '../../styles/styleComponents/styledHeader/Header.Styled';

const Home = () => {

  const username = useSelector(currentUser)
  const userInfo = useSelector((state: RootState) => state.persistedReducer.auth);

  const token = userInfo.accessToken ? `${userInfo.accessToken.slice(130, 181)}...` : 'Empty!'

  const content = (
    <HomeContainer>
      <section className="welcome">
        <H1>USER INFORMATION:</H1>
        <p>Username: {username ? `${username}` : "Empty"}</p>
        <p>Token: {token}</p>
      </section>
    </HomeContainer>
  );

  return content

}

export default Home

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {
    H1scrool, HeaderCenter, HeaderContainer,
    HeaderLeft, HeaderRight, HeaderRightItems, HeaderWrapper,
    HeaderWrapperLinks, Logo, LogoH1, MobileIcon, NavItem, NavLinks,
    NavMenu, SocialIcons, SocialItems
} from '../../styles/styleComponents/styledHeader/Header.Styled';
import Typical from "react-typical";
import Flip from 'react-reveal/Flip';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
    AiFillYoutube,
} from 'react-icons/ai';
import { currentUser } from '../../features/auth/authSlice'

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const username = useSelector(currentUser);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLeft to='/'>
                    <Logo src="https://firebasestorage.googleapis.com/v0/b/chagest-eshop.appspot.com/o/Logo%2Flogo.png?alt=media&token=9b7a9042-f7d7-46c7-b321-bc5cd40cd335" alt='logo' />
                    <LogoH1>CHAGEST</LogoH1>
                </HeaderLeft>
                <HeaderCenter>
                    <Flip center>
                        {
                            username ?
                                <H1scrool $mode="welcome">
                                    {' '}
                                    <Typical

                                        steps={[
                                            `Welcome ${username}`
                                        ]} />
                                </H1scrool>
                                :
                                <H1scrool $mode="title">
                                    {' '}
                                    <Typical

                                        steps={[
                                            "Ethusiastic IT ❤️‍🔥"
                                            /*"Open to other experience 💻",
                                            2000,*/
                                        ]} />
                                </H1scrool>
                        }
                    </Flip>
                </HeaderCenter>
                <HeaderRight>
                    <HeaderRightItems>
                        <SocialItems>
                            <SocialIcons href='https://github.com/rootChristian'>
                                <AiFillGithub size="1.5rem" />
                            </SocialIcons>
                            <SocialIcons href='https://www.linkedin.com/in/christian-kemgang-4a069213b'>
                                <AiFillLinkedin size="1.5rem" />
                            </SocialIcons>
                            <SocialIcons href="https://twitter.com/Kemgangchrist">
                                <AiFillTwitterSquare size="1.5rem" />
                            </SocialIcons>
                            <SocialIcons href='https://www.instagram.com/christ_clever/'>
                                <AiFillInstagram size="1.5rem" />
                            </SocialIcons>
                            <SocialIcons href='https://www.youtube.com/channel/UCC9IOV7daqFI-la6_8HlgXA'>
                                <AiFillYoutube size="1.5rem" />
                            </SocialIcons>
                        </SocialItems>
                    </HeaderRightItems>
                </HeaderRight>
            </HeaderWrapper>
            <HeaderWrapperLinks>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/users'>Users</NavLinks>
                    </NavItem>
                    <NavItem>
                        {username ?
                            <NavLinks to='/logout'>Logout</NavLinks>
                            :
                            <NavLinks to='/login'>Login</NavLinks>
                        }

                    </NavItem>
                </NavMenu>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
            </HeaderWrapperLinks>
        </HeaderContainer>
    )
}

export default Header

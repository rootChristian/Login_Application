/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';
import {
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterContainer,
  SocialIcons,
  Logo,
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
  SocialItems,
  LogoH4,
  FooterLinkServices
} from '../../styles/styleComponents/styledFooter/Footer.Styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
            <FooterLinkServices href='https://github.com/rootChristian'>Github</FooterLinkServices>
            <FooterLinkServices href='https://www.linkedin.com/in/christian-kemgang-4a069213b'>Linkedin</FooterLinkServices>
            <FooterLinkServices href='https://twitter.com/Kemgangchrist'>Twitter</FooterLinkServices>
            <FooterLinkServices href='https://www.instagram.com/christ_clever/'>Instagram</FooterLinkServices>
            <FooterLinkServices href='https://www.youtube.com/channel/UCC9IOV7daqFI-la6_8HlgXA'>Youtube</FooterLinkServices>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>SERVICES</FooterLinkTitle>
            <FooterLinkServices href='https://tesi.netlify.app/'>Ecommerce</FooterLinkServices>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>CONTACT ME</FooterLinkTitle>
            <FooterLink to='#'>Sending a Message</FooterLink>
            <FooterLink to='#'>Privacy Theme</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterWrapper>
        <FooterLeft to='/'>
          <Logo src="https://firebasestorage.googleapis.com/v0/b/chagest-eshop.appspot.com/o/Logo%2Flogo.png?alt=media&token=9b7a9042-f7d7-46c7-b321-bc5cd40cd335" alt='logo' />
          <LogoH4>CHAGEST</LogoH4>
        </FooterLeft>
        <FooterCenter>
          © Copyright 2023 - All Rights Reserved by Christian KEMGANG 👨🏾‍💻 <a href="https://chagest.com">chagest.com</a>
        </FooterCenter>
        <FooterRight>
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
        </FooterRight>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
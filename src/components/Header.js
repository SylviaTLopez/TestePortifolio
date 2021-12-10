import React from 'react'
import FWorks from './FWorks'
import Menu from './Menu'
import Posts from './Posts'
import Resume from './Resume'
import Footer from './Footer'

import {
  HeaderContainer,
  Container,
  ContainerMenu,
  ResumeContainer,
  PostsContainer,
  FWorksContainer,
  FooterContainer
} from './styles'

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <ContainerMenu>
            <Menu />
          </ContainerMenu>
        </Container>
      </HeaderContainer>

      <ResumeContainer>
        <Resume />
      </ResumeContainer>

      <PostsContainer>
        <Posts />
      </PostsContainer>

      <FWorksContainer>
        <FWorks />
      </FWorksContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  )
}

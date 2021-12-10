import React from 'react'
import Menu from './Menu'
import Posts from './Posts'
import Resume from './Resume'

import {
  HeaderContainer,
  Container,
  ContainerMenu,
  ResumeContainer,
  PostsContainer
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
    </>
  )
}

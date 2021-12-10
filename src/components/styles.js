import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 90px;
  background-color: #ffffff;
  padding: 20px 20px;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
  display: flex;
  justify-content: end;
`
export const ContainerMenu = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
      margin-right: 10px;
      font: 600 20px 'Heebo', sans-serif;
      cursor: pointer;

      &:hover {
        color: #d76060;
        transition-duration: 0.2s;
      }
    }
  }
`
export const ResumeContainer = styled.div`
  display: flex;
  text-align: start;
  h1,
  img h1 {
    width: 506px;
    height: 105px;
    margin-left: 148px;
    margin-top: 228px;
    font: 700 44px 'Heebo', sans-serif;
    margin-left: 148px;
  }

  p {
    width: 497px;
    height: 66px;
    margin-left: 148px;
    margin-top: 40px;
    text-align: justify;
    font: 400 16px 'Heebo', sans-serif;
  }

  button {
    width: 208px;
    height: 47px;
    margin-left: 148px;
    margin-top: 38px;
    background-color: #ff6464;
    border-radius: 2px;
    font: 500 20px 'Heebo', sans-serif;
    color: #ffff;
    border: 0;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #b54444;
      transition-duration: 0.2s;
    }
  }

  img {
    position: absolute;
    border-radius: 50%;
    width: 243px;
    height: 243px;
    margin-right: 148px;
    margin-left: 620px;
    top: 320px;
  }
`
export const PostsContainer = styled.div`
  height: 396px;
  background-color: #edf7fa;
  margin-top: 0;
`

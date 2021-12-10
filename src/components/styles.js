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
  margin-top: 88px;
  display: flex;
  width: 1310px;

  .options {
    h1 {
      margin-left: 148px;
      margin-top: 20px;
      font: 400 20px 'Heebo', sans-serif;
      color: #21243d;
    }

    h2 {
      position: absolute;
      width: 208px;
      margin-left: 1100px;
      top: 728px;
      font: 400 16px 'Heebo', sans-serif;
      color: #00a8cc;
      cursor: pointer;

      &:hover {
        color: #09809a;
        text-decoration: underline;
        transition-duration: 0.2s;
      }
    }
  }

  .post1 {
    width: 418px;
    height: 300px;
    margin-left: 148px;
    background-color: #ffff;
    box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
    border-radius: 4px;

    h1 {
      width: 400px;
      height: 85px;
      font: 700 26px 'Heebo', sans-serif;
      color: #21243d;
      padding: 24px 24px;
      cursor: pointer;
    }

    h2 {
      width: 418px;
      height: 34px;
      font: 400 18px 'Heebo', sans-serif;
      padding: 17px 24px;
    }

    p {
      width: 368px;
      height: 117px;
      font: 400 16px 'Heebo', sans-serif;
      padding: 11px 24px;
    }
  }

  .post2 {
    float: right;
    width: 418px;
    height: 300px;
    margin-left: 744px;
    margin-right: 148px;
    margin-top: -300px;
    background-color: #ffff;
    box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
    border-radius: 4px;

    h1 {
      width: 400px;
      height: 85px;
      font: 700 26px 'Heebo', sans-serif;
      color: #21243d;
      padding: 6px 24px;
      cursor: pointer;
    }

    h2 {
      width: 418px;
      height: 28px;
      font: 400 18px 'Heebo', sans-serif;
      padding: 0px 24px;
    }

    p {
      width: 368px;
      height: 117px;
      font: 400 16px 'Heebo', sans-serif;
      padding: 0px 24px;
    }
  }
`
export const FWorksContainer = styled.div`
  height: 800px;
  background-color: #ffff;
  display: flex;
  width: 1310px;

  img {
    width: 246px;
    height: 180px;
  }
  .title {
    h1 {
      flex-direction: row;
      margin-left: 148px;
      margin-top: 20px;
      font: 400 22px 'Heebo', sans-serif;
      color: #21243d;
    }
  }
  .work1 {
    display: flex;
    img {
      margin-left: 146px;
      width: 246px;
      height: 180px;
    }
    h1 {
      flex-direction: row;
      margin-left: 18px;
      margin-top: 0px;
      width: 305px;
      height: 44px;
      font: 700 30px 'Heebo', sans-serif;
      color: #21243d;
      cursor: pointer;

      &:hover {
        filter: brightness(2);
        transition-duration: 0.2s;
      }
    }
    h2 {
      flex-direction: row;
      margin-top: 65px;
      margin-left: -305px;
      width: 62px;
      height: 25px;
      background: #142850;
      border-radius: 16px;
      font: 900 18px 'Heebo', sans-serif;
      color: #ffff;
      text-align: center;
    }

    h3 {
      margin-top: 62px;
      margin-left: 26px;
      font: 400 20px 'Heebo', sans-serif;
      color: #8695a4;
    }

    p {
      position: absolute;
      left: 410px;
      top: 1188px;
      margin-top: 100px;
      //margin-left: -100px
      width: 561px;
      height: 93px;
      font: 400 16px 'Heebo', sans-serif;
    }
  }
`

export const FooterContainer = styled.div`
  width: 1310px;
  height: 182px;
  display: flex;
  justify-content: center;
  align-items: center;

  .social {
    img {
      align-items: center;
      padding: 26px 25px;
      cursor: pointer;

      &:hover {
        filter: brightness(2);
        transition-duration: 0.2s;
      }
    }
  }
    h2 {
      font: 400 14px 'Heebo', sans-serif;
      color: #21243d;
      text-align: center;
    }
  }
`

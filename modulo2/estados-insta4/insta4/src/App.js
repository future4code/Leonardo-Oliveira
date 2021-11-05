import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import leoProfile from "./assets/leo.jpg";
import postLeo from "./assets/teste.jpg";
import postLeo2 from "./assets/leo2.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"Leozartino"}
          fotoUsuario={leoProfile}
          fotoPost={postLeo}
        />
        <Post
          nomeUsuario={"Leozartino"}
          fotoUsuario={leoProfile}
          fotoPost={postLeo2}
        />
      </MainContainer>
    );
  }
}

export default App;

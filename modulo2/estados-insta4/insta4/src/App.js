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
  state = {
    accounts: [
      {
        userName: "paulinha",
        pathUserImg: "https://picsum.photos/50/50",
        pathPostImg: "https://picsum.photos/200/150",
      },
      { userName: "leozartino", pathUserImg: leoProfile, pathPostImg: postLeo },
      {
        userName: "leozartino",
        pathUserImg: leoProfile,
        pathPostImg: postLeo2,
      },
    ],
  };
  render() {
    const posts = this.state.accounts.map((account, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={account.userName}
          fotoUsuario={account.pathUserImg}
          fotoPost={account.pathPostImg}
        ></Post>
      );
    });

    console.log(posts);
    return <MainContainer>{posts}</MainContainer>;
  }
}

export default App;

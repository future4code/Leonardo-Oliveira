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

const Form = styled.form`
  & {
    padding-top: 10px;
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
  }
  input[type="text"] {
    background-color: #3cbc8d;
    color: white;
  }
`;

class App extends React.Component {
  state = {
    username: "",
    urlImg: "",
    urlPostImg: "",
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

  OnChangeUser = ({ target }) => {
    this.setState({ username: target.value });
  };
  OnChangeUrl = ({ target }) => {
    this.setState({ urlImg: target.value });
  };
  OnChangeUrlPost = ({ target }) => {
    this.setState({ urlPostImg: target.value });
  };

  OnSubmitForm = (event) => {
    if (!this.state.username && !this.state.urlImg && !this.state.urlPostImg) {
      alert("Please fill in all the required fields!");
    } else {
      const novoPost = {
        userName: this.state.username,
        pathUserImg: this.state.urlImg,
        pathPostImg: this.state.urlPostImg,
      };

      const arrayPosts = [...this.state.accounts];

      arrayPosts.push(novoPost);

      this.setState({ accounts: arrayPosts });

      this.setState({ username: "", urlImg: "", urlPostImg: "" });
      event.preventDefault();
    }
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

    console.log(this.state);

    return (
      <MainContainer>
        <Form onSubmit={this.OnSubmitForm}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.OnChangeUser}
            />
          </div>
          <div>
            <label>UrlUserImg</label>
            <input
              type="text"
              value={this.state.urlImg}
              onChange={this.OnChangeUrl}
            />
          </div>
          <div>
            <label>UrlPostImg</label>
            <input
              type="text"
              value={this.state.urlPostImg}
              onChange={this.OnChangeUrlPost}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
        {posts}
      </MainContainer>
    );
  }
}

export default App;

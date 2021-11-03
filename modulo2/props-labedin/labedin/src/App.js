import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import leoPhoto from "./img/leo_pic.jpeg";
import msbLogo from "./img/msb_logo.jpeg";

function App() {
  const nome = "Leonardo Oliveira";
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={leoPhoto}
          nome={nome}
          descricao={`Oi, eu sou o ${nome}. Sou estudante de ciência da computação e atualmente estagio em uma empresa de software no estado do Amapá. Sou estudante da Labenu`}
        />

        <ImagemButton
          imagem={"https://image.flaticon.com/icons/png/512/117/117472.png"}
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        icon="fas fa-envelope-open-text"
        nomeProp="Email: "
        valorProp=" leo@email.com"
      />
      <CardPequeno
        icon="fas fa-map-marked-alt"
        nomeProp="Endereço:"
        valorProp=" Avenida tal e tal 000"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={msbLogo}
          nome="Msb Tecnologia"
          descricao="Trabalho no backend utilizando node.js/typescript desenvolvendo aplicações para empresas contratantes."
        />

        <CardGrande
          imagem="https://play-lh.googleusercontent.com/i_AQVRQ8FzQ28B-A5RrjeJqPKHtImW44N6aNV22HrBKC2EeFpT9BPBUOLTgnfZ_DqRM"
          nome="Ministério Público do Estado do Amapá"
          descricao="Estagiário como suporte tecnico ao usuário."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

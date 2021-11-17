import React from "react";

const FormSingup = () => {
  return (
    <div className="form-content-right">
      <form action="" className="form">
        <h1>Cria a sua conta agora!</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Insira o username"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Insira o seu email"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSingup;

import React from 'react';
import './App.css'; 

const App = () => {
  return (

    <div className="container">

    <div>
      <h1 className="title-text">Juba's Barbearia</h1>
      <img
        src={require('./assets/images/logoMarca.png')}
        alt="Logo"
        className="logo"
      />
    </div>

      <form>

        <div className="field-container">
          <label htmlFor="cpf">Digite seu CPF:</label>
          <input type="text" 
            className="form-control" 
            id="cpf" name="cpf" 
            placeholder="123.456.789-10" 
          required />
        </div>
        
        <div className="password-container">
          <label htmlFor="senha">Digite sua senha:</label>
          <input type="password" 
            className="form-control" 
            id="senha" 
            name="senha" 
            placeholder="**********" 
          required />
        </div>

        <div className="button-container">
          <button className="btn btn-primary custom-button" type="button">Entrar</button>
        </div>
        
        <p className="forgot-password">
          <a href="#">Esqueci minha senha</a> 
        
          <p></p>

          <a className="create-account"href="#">Não possui uma conta? Cadastre-se</a>
          
        </p>
      </form>
    </div>
  );
}

export default App;

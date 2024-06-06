import React from "react";
import {Router, Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css"
import "../styles/auth.css"

function Auth() {
  //пиши свой код
  return (
    <div className="auth">
      <Header />
      <main>
        <table>
          <tr><th class="auth-head">Вход в аккаунт</th></tr>
          <tr class="email"><td>E-mail</td></tr>
          <tr class="email">
            <td>
              <input type="email" class="mail-input" placeholder="Введите E-mail" />
            </td>
          </tr>
          <tr class="password"><td>Пароль</td></tr>
          <tr class="password">
            <td>
              <input type="password" class="password" placeholder="Введите Пароль" />
            </td>
          </tr>
          <tr>
            <td>
            <button class="button">Войти</button>
            </td>
          </tr>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default Auth;
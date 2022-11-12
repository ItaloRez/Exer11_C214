import { FaUserNinja } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

import ClientUsers from "../../services/user.js";

import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";

import style from "./style.module.css";
import { useEffect } from "react";

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await ClientUsers.list();
      setUsers(response.data);
    } catch (error) {
      toast.error("Erro ao listar usuários");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Sidebar />

      <div className={style.content}>
        <Title name="Listagem de Usuários">
          <FaUserNinja size={30} />
        </Title>

        <div className={style.container}>
          <div className={style.userList}>
            {users.map((item, index) => {
              return (
                <article key={index} className={style.boxUser}>
                  <strong>Nome: {item.nome}</strong>
                  <strong>Email: {item.email}</strong>
                  <strong>Senha: {item.senha}</strong>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaUserNinja } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

import ClientUsers from "../../services/user.js";

import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";

import style from "./style.module.css";

import { AiOutlineSearch } from "react-icons/ai";

export default function ListByEmail() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await ClientUsers.listByEmail({
        email,
      });
      setUser(response.data);
    } catch (error) {
      toast.error("Erro ao listar usuários");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />

      <div className={style.content}>
        <Title name="Listagem de Usuários">
          <FaUserNinja size={30} />
        </Title>

        <div className={style.container}>
          <div className={style.busca}>
            <div className={style.inputBusca}>
              <label className={style.label}>Digite o email do usuário</label>
              <input
                className={style.input}
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <button className={style.buttonBusca} onClick={getUser}>
              <AiOutlineSearch size={20} />
            </button>
          </div>

          <div className={style.userList}>
            <article className={style.boxUser}>
              {loading ? (
                "Carregando..."
              ) : (
                <>
                  <strong>Nome: {user?.nome}</strong>
                  <strong>Email: {user?.email}</strong>
                  <strong>Senha: {user?.senha}</strong>
                </>
              )}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

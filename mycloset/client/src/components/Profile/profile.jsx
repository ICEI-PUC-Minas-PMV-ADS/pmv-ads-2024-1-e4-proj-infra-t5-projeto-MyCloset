import styles from './styles.module.css';
import { Navigate } from 'react-router-dom';
import Main from '../Main/index.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const [newPhoto, setNewPhoto] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config.headers);

    // Requisição para o servidor para buscar as informações do usuário logado
    axios
      .get('/api/users', config)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar informações do usuário:', error);
      });
  }, []);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setNewPhoto(e.target.value);
  };
  function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById('file-ip-1-preview');
      preview.src = src;
      preview.style.display = 'block';
    }
  }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Requisição para o servidor para atualizar as informações do usuário
  //     axios
  //       .put('/api/user', { newPassword, newPhoto })
  //       .then((response) => {
  //         setMessage('Informações atualizadas com sucesso!');
  //       })
  //       .catch((error) => {
  //         console.error('Erro ao atualizar informações do usuário:', error);
  //       });
  //   };
  const handleSubmit = (e) => {};
  return (
    <>
      <Main />
      <div className={styles.manage_profile}>
        <div className={styles.manage_profile_title}>Gerenciar conta</div>
        <hr />
        <div className={styles.edit_profile_section}>
          <div className={styles.manage_profile_subtitle}>Editar perfil</div>
          <form action="" method="post" className={styles.manage_profile_form}>
            <div className={styles.center}>
              <div className={styles.form_input}>
                <div className={styles.preview}>
                  <img
                    className={styles.form_input.preview}
                    id="file-ip-1-preview"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0xhV7fsyuMC2kqogNeYEws&ust=1715038286898000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiAks_V94UDFQAAAAAdAAAAABAE"
                    alt="MDN logo"
                  />
                </div>
                <label htmlFor="file-ip-1">Carregar Imagem</label>
                <input
                  type="file"
                  id="file-ip-1"
                  accept="image/*"
                  onChange="showPreview(event);"
                />
              </div>
            </div>

            <div className={styles.manage_profile_txt_field}>
              <label htmlFor="" className={styles.manage_profile_label}>
                Nome
              </label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.manage_profile_txt_field}>
              <label htmlFor="" className={styles.manage_profile_label}>
                Nome de usuário
              </label>
              <input type="text" name="" id="" />
            </div>

            <div className={styles.manage_profile_txt_field}>
              <label htmlFor="" className={styles.manage_profile_label}>
                Email
              </label>
              <input type="text" name="" id="" />
            </div>

            <div className={styles.manage_profile_txt_field}>
              <label htmlFor="" className={styles.manage_profile_label}>
                Telefone
              </label>
              <input type="text" name="" id="" />
            </div>
            <button type="submit" className={styles.blue_btn}>
              Atualizar Perfil
            </button>
          </form>
        </div>
        <hr />
        <div className={styles.manage_profile_subtitle}>Alterar senha</div>

        <form action="" method="post" className={styles.manage_profile_form}>
          <div className={styles.manage_profile_txt_field}>
            <label htmlFor="" className={styles.manage_profile_label}>
              Senha antiga
            </label>
            <input type="password" name="" id="" />
          </div>
          <div className={styles.manage_profile_txt_field}>
            <label htmlFor="" className={styles.manage_profile_label}>
              Nova senha
            </label>
            <input type="password" name="" id="" />
          </div>
          <div className={styles.manage_profile_txt_field}>
            <label htmlFor="" className={styles.manage_profile_label}>
              Confirmar nova senha
            </label>
            <input type="password" name="" id="" />
          </div>
          <button type="submit" className={styles.blue_btn}>
            Atualizar Nova Senha
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;

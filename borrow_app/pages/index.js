import UserFooter from '@/components/UserFooter'
import Link from "next/link"
import styles from "@/styles/Home.module.css"
import react from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
  const [u_email, setu_email] = useState('');
  const [u_password, setu_password] = useState('');
  const Router = useRouter()
  const handleICITChange = (e) => {
    setu_email(e.target.value);
  };

  const handleu_passwordChange = (e) => {
    setu_password(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login/', 
    { u_email:u_email, u_password:u_password })
    .then((response) => {
      Router.push("/Admin")})
    .catch((error) => {
      console.error(error);
    });
};


  return (
    <>
    <div className={styles.container}>
      <h1>Login</h1>
      {JSON.stringify(u_email)}
      {JSON.stringify(u_password)}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="u_email" className={styles.label}>Email:</label>
        <input
          type="text"
          id="u_email"
          value={u_email}
          onChange={handleICITChange}
          className={styles.input}
          required
        />
        <label htmlFor="u_password" className={styles.label}>password:</label>
        <input
          type="password"
          id="u_password"
          value={u_password}
          onChange={handleu_passwordChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
    <UserFooter/>
    </>
  );
}


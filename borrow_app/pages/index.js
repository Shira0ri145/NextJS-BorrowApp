import UserFooter from '@/components/UserFooter'
import Link from "next/link"
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> This is Loginpage</h1>
        <button><Link href="/Contact">Go to Userpage</Link></button>
      </div>
      <UserFooter/>
      
    </>
  )
}

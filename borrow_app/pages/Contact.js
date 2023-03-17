import UserNavbar from "@/components/UserNavbar";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Contact.module.css"
import Image from "next/image";
export default function Contact() {
    return (
        <>
            <Head>
                <title>ติดต่อ | Contact</title>
            </Head>
            
            <UserNavbar/>
            <section>
            <div>
            <main className={styles.Aboutus}>
    <h2 className={styles.Title}>Our Team</h2>
    <section id="sec">
      <div className={styles.person}>
        <Image src="" alt="Profile picture" width="200" height="200"/>
        <h3>p1 </h3>
        <p>640</p>
      </div>
      <div className={styles.person}>
        <Image src="" alt="Profile picture"width="200" height="200"/>
        <h3>Athibdee Ringcharoen</h3>
        <p>6401012620153</p>
      </div>
      <div className={styles.person}>
        <Image src="" alt="Profile picture" width="200" height="200"/>
        <h3>p2</h3>
        <p>64</p>
      </div>
      <div className={styles.person}>
        <Image src="" alt="Profile picture" width="200" height="200"/>
        <h3>p3 </h3>
        <p>64</p>
      </div>
    </section>
  </main>
            </div>
</section>

        
        </>
            
    )
};

import UserNavbar from "@/components/UserNavbar"
import Head from "next/head"

export default function MyBorrowed() {
    return (
    <>
        <Head>
                <title>การยืมของฉัน | My borrowed</title>
        </Head>
        <UserNavbar/>
        <h1> This is My borrowed Items page</h1>
    </>
    )
};

import { auth } from "@/auth";
import SigninDIalog from "@/components/composites/SigninDIalog";
import Logout from "@/components/myUI/Logout";

export default async function Home() {

  const session = await auth();


  return (
    <>
      <h1>Home Foodies</h1>
      <SigninDIalog/>

      <Logout/>

      {session?.user ? (
        <p>
          Signed in as {session.user.email} <br />
          {JSON.stringify(session, null, 2)}
        </p>
      ): ("Null")}
    </>
  );
}

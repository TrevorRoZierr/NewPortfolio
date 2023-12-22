import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div style={{border: "1px solid black"}}>
        <MyProfile />
      </div>
    </main>
  )
}

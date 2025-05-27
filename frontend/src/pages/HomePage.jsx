import useLoginState from "../stores/useLoginState";
import WelcomeBox from "../components/WelcomeBox";
import HomeView from "./HomeView";

const HomePage = () => {
  const { loggedIn } = useLoginState();

  return (
    <section id="homepage" className="h-full flex flex-col items-center gap-6">
      {!loggedIn && <WelcomeBox />}
      {loggedIn && <HomeView />}
    </section>
  );
};

export default HomePage;

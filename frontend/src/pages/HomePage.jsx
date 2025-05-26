import useLoginState from "../stores/useLoginState";
import WelcomeBox from "../components/WelcomeBox";
import DashViewHome from "../components/DashViewHome";

const HomePage = () => {
  const { loggedIn } = useLoginState();

  return (
    <div className="h-full flex flex-col items-center gap-6">
      {!loggedIn && <WelcomeBox />}
      {loggedIn && <DashViewHome />}
    </div>
  );
};

export default HomePage;

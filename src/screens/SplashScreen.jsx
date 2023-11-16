import { useEffect } from "react";
import AnimatedSplash from "react-native-animated-splash-screen";

const SplashScreen = ({ navigation }) => {

  useEffect(()=>{
    setTimeout(()=>navigation.navigate('home'),300);
  })

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={this.state.isLoaded}
      logoImage={require("../../assets/images/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
    >
      <App />
    </AnimatedSplash>
  )
}

export default SplashScreen;
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './src/router/MainRouter';
import { Fragment } from 'react';
import { SafeAreaView } from 'react-native';

function App() {
  return (
    <Fragment>
      <SafeAreaView>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
}

export default App;
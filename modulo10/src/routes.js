import { createAppContainer, createSwithcNavigator } from 'react-navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwithcNavigator({
    SignIn,
    SignUp,
  })
);

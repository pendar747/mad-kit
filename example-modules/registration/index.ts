import { configureModule } from 'mad';
import registration from './pages/registration';
import login from './pages/login';

export enum MessagesTypes {
    RegisterUser,
    UserRegisteredSuccessfully,
    UserRegisterationFailed
}

interface ConsumedResources {}

interface ProducedResources {}

export default configureModule<ConsumedResources, ProducedResources, MessagesTypes>({
  name: 'registration',
  description: 'User registration and login',
  pages: {
    registration,
    login
  }
});

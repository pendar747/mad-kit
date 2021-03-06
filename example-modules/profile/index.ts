import { configureModule } from '../../lib/node_modules/mad';

interface ConsumedResources {
  username: string,
  avatar: string
}

interface ProducedResources {
  avatar: string
}

export default configureModule<ConsumedResources, ProducedResources>({
  name: 'Profile-Page',
  description: 'A module for rendering a user profile'
});


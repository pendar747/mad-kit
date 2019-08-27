import { configureModule } from '../../lib/node_modules/mad';

interface ConsumedResources {}

interface ProducedResources {}

export default configureModule<ConsumedResources, ProducedResources>({
  name: 'Persistance',
  description: 'A module for storing resources to a database'
});

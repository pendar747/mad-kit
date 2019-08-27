import createService from '../../../lib/node_modules/mad';
import { MessagesTypes } from '..';

const service = ({ persistance, sendMessage }, { username, password }) => {
    const user = await persistance.create('user', {
        username,
        passwordHash: hash(password)
    });
    
    sendMessage(MessagesTypes.UserRegisteredSuccessfully, user);
}

createService( 'registerUser', MessagesTypes.RegisterUser, service);
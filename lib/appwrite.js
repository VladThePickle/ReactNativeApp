import {Client, Account, Avatars, TablesDB, Realtime} from 'react-native-appwrite'


export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69f446b80017e53b400b')
    .setPlatform('dev.vladthepickle.test')


export const realtime = new Realtime(client)

export const account = new Account(client)
export const avatars = new Avatars(client)
export const tablesDB = new TablesDB(client)
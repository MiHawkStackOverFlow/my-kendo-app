// https://reqres.in/api/users?page=1

export interface IUsers {
  api: {
    configuration: {
       root: string; 
    };
    users: {
        root: string;
        users: string;
    };  
  }
}

export const usersConfig: IUsers = {
    api: {
        configuration: {
            root: 'https://reqres.in/'
        },
        users: {
            root: 'api',
            users: 'users'
        }
    }
}
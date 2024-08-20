interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Cristian'
    },
    {
        id: 2,
        name: 'Cristina'
    }
];

export const getUserById = (id: number, callback: (err?: string, user?:User) => void) => {
    const user = users.find( (user) => user.id === id);

    (user)
    ? callback(undefined, user)
    : callback(`User not found with id ${id}`);
}
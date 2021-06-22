const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};
    
const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
        return resolve(users[id]);
        };

        return reject({ error: 'User with ' + id + ' not found.' });
    });
};

const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
};

test('Caso user seja encontrado', async () => {
    expect.assertions(1);
    const data = await findUserById(4);
    expect(data.name).toBe('Mark');
})

test('Caso user NÂO seja encontrado', async () => {
    expect.assertions(1);
    try {
        await findUserById(2)
    } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' })
    }
})


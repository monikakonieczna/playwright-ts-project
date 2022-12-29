import faker from 'faker';

export const getCustomerData = () => {
    const my_password = faker.internet.password(10);
    return {
        firstname: faker.name.firstname(), 
        lastname: faker.name.lastname(), 
        address: faker.address.streetName(),
        city: faker.address.cityName(), 
        state: faker.address.state(), 
        zipCode:faker.address.zipCode(), 
        phone: faker.phone.number(), 
        ssn: faker.phone.number(), 
        username: faker.internet.userName(), 
        password: my_password,
        confirm: my_password
    
    }
}
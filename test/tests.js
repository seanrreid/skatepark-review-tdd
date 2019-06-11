const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).should();

const User = require('../models/users');
const Parks = require('../models/parks');

describe('Users model tests', () => {
    // Given an email addres, do we get a user object in return
    it('should be a valid user object', async () => {
        const userInstance = new User(null, null, null, 'derp@mcderp.com', null);
        const theUser = await userInstance.getUserByEmail();
        console.log(theUser)
        expect(theUser).to.be.an('object');
    });

    it('should NOT be undefined', async () => {
        const userInstance = new User(null, null, null, 'derp@mcderp.com', null);
        const theUser = await userInstance.getUserByEmail();
        expect(theUser.id).to.not.be.an('undefined');
    });
    
    it('should get a list of all users', async () => {
        const allUsers = await User.getAllUsers();
        expect(allUsers).to.not.be.an('undefined');
    })
})

// Write a function to make this test pass...
describe('Parks model tests', async () => {
    it('should return a valid park instance', async () => {
        const thePark = await Parks.getById(1);
        thePark.should.be.an.instanceOf(Parks);
    })
});
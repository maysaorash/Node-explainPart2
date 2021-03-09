const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should() //The result should be ...

const server = require('../../app')
chai.use(chaiHttp)

describe('Main Page Test',()=>{
    it('Run the HomePage (/GET)',(done)=>{
       chai.request(server)
       .get('/')
       .end((err,res)=>{
           res.should.have.status(200);
           done();
       })
    })
})
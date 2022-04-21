/// <reference types = "cypress"/>

let testData;

describe("POST_/auth/login_alreadylogin",()=>{

    before("fetch data from testData.json",() =>{

        cy.fixture('testData').then((loginData) =>{
            testData = loginData;
        })
    });

    beforeEach("login before every test", () => {

        cy.login(testData.username, testData.password);
    
    });
    
    
    it("statuscode should be 500 ",()=>{

        cy.login(testData.username, testData.password).then((res)=>{
            expect(res.status).to.equal(500);
        })
            
    });

    it("verify headers_ content-type",()=>{

        cy.login(testData.username, testData.password).then((res)=>{
            expect(res.headers).has.property("content-type", "application/json;charset=utf-8");
        })
            
    });

    it("verify response body_ message content",()=>{
    
        cy.login(testData.username, testData.password).then((res)=>{
            expect(res.body).has.property("message","Cannot perform login for 'trakdemo' already authenticated as 'trakdemo'");
            cy.log(JSON.stringify(res));
        })
            
    });
    
})
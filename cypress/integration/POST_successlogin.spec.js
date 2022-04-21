/// <reference types ="cypress" />

describe("POST _/auth/login_valid username and password", ()=>   {
    let testData

    beforeEach("logout", ()=>
    {   
        cy.logout();
        cy.fixture('testData').then((loginData) =>{
            testData = loginData
        })
    });

    it ("verify statusCode should be 200", ()=>{
        cy.login(testData.username, testData.password).then((res)=>{
            expect(res.status).to.equal(200)
            cy.log("login successful")
        })
    });

    it ("verify headers: content-type", ()=>{
        cy.login(testData.username, testData.password).then((res)=>{
            expect(res.headers).has.property("content-type", "application/json;charset=utf-8")
        })
    });

    it ("verify response body", ()=>{
        cy.login(testData.username, testData.password).then((res)=>{
            cy.log(JSON.stringify(res)) //covert res object to Json
            expect(res.body).has.property("name","Demo User")
            expect(res.body.roles[0]).has.property("name", "Administrator")
        })
    });
})


   

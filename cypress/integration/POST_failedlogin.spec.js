///<reference types = "cypress" />

describe("POST _/auth/login_valid username, invalid pwd", ()=>   {

    let testData

    beforeEach("fetch data from testData.json", ()=>
    {   cy.fixture('testData').then((loginData) =>{
            testData = loginData
        })

        
    });

    it ("verify that status Code should be 401", ()=>{
        cy.login(testData.username, testData.invalid_password).then((res)=>{
            cy.log("Login failed")
            expect(res.status).to.equal(401)
        })
    });

    it ("verify body has login fail message", ()=>{
        cy.login(testData.username, testData.invalid_password).then((res)=>{
            cy.log(JSON.stringify(res)) //covert res object to Json
            expect(res.body).has.property("message","Login Failure. Please try again.")  
                
        })
    });
})
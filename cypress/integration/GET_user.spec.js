///<reference types = "cypress" />

let testData

describe("GET_ /auth/user", ()=>{

    beforeEach("fetch loginData from testData.json", ()=> {

        cy.fixture('testData').then((loginData) =>{
            testData = loginData
        })
    })

    it("verify statusCode should be 200", ()=>{

        cy.login(testData.username, testData.password);
        cy.getUser().then((res)=>{
            expect(res.status).to.equal(200);
        })
    });

    it("verify response headers : content-type", ()=>{
        cy.login(testData.username, testData.password)
        cy.getUser().then((res)=>{
            expect(res.headers).has.property("content-type", "application/json;charset=utf-8")
        })
    })

    it("verify response body: TimeLastLogin", ()=>{
        cy.login(testData.username, testData.password)
        cy.getUser().then((res)=>{
            expect(res.body.timeLastLogin).to.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/i)
        })
    })

    it("verify response body: username should the same as username in POST_login",()=>{
        cy.login(testData.username, testData.password).then((res)=>{
            const userName = res.body.name
            cy.getUser().then((res)=>{
                expect(res.body.name).to.equal(userName)
            })
        })
    })

    it("verify response body: roles should the same as roles in POST_login", ()=>{
        cy.login("trakdemo", "trakdemo").then((res)=>{
            const roles = res.body.roles[0].name
            cy.getUser().then((res)=>{
                expect(res.body.roles[0].name).to.equal(roles)
            })
        })
    })

    it("log response", () =>{
        cy.login("trakdemo", "trakdemo")
        cy.getUser().then((res)=>{
            cy.log(JSON.stringify(res))
        })
    });


})
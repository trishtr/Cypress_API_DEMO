/// <reference types ="cypress" />

describe("GET _/auth/logout", ()=>{

    it("statusCode should equal 200", ()=>{
       cy.logout().then((res)=>{
           expect(res.status).to.eq(200)
       })
    })
})
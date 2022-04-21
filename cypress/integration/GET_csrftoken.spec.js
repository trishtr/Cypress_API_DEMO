/// <reference types ="cypress" />

describe("GET _/csrf/token", ()=>{

    //it.only to run only specific test
    //it.skip to skip test

    it("statusCode should equal 200", ()=>{

        cy.csrfRequest().then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
    it("verify body", ()=>{
        cy.csrfRequest().then((res)=>{
            expect(res.body).has.property("headerName" ,"X-CSRF-TOKEN")
        })
            
    })    
        
    it("verify headers : content-type", ()=>{
        cy.csrfRequest().then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.body).has.property("headerName" ,"X-CSRF-TOKEN")
        })
            
    })    
        
})

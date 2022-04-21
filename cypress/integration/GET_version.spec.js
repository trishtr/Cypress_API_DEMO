///<reference types = "cypress" />

describe("GET_pub/version_testing", ()=>{

    it("verify status should be 200",()=>{

        cy.getVersion().then((res)=>{
            expect(res.status).to.equal(200)
        })
    });

    it("verify headers_ content-type",()=>{

        cy.getVersion().then((res)=>{
            expect(res.headers).has.property("content-type", "application/json;charset=utf-8")
        })
    });

    it("verify response body_ trak.version",()=>{

        cy.getVersion().then((res)=>{
            expect(res.body.trak.version).to.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/i);
        })
    });

    it("verify response body_ trak.revision",()=>{

        cy.getVersion().then((res)=>{
            expect(res.body.trak.revision).to.match(/^\d+$/i)
        })
    });
    
    it("verify response body_ site.version",()=>{

        cy.getVersion().then((res)=>{
            expect(res.body.site.version).to.match(/(\d+\.)?(\d+\.)?(\*|\d+)$/i)
        })
    });
    
    it("verify response body_ site.revision",()=>{

        cy.getVersion().then((res)=>{
            expect(res.body.trak.revision).to.match(/^\d+$/i)
        })
    });

    it("log the response body", ()=>{
        cy.getVersion().then((res)=>{
            cy.log(JSON.stringify(res))
        })
    })
    

})
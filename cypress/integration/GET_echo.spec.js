/// <reference types = 'cypress' />

describe ('GET_/pub/echo', ()=>{

    it('verify statusCode should be 409', ()=>{

        cy.getEcho().then((res)=>{
            expect(res.status).to.equal(409);
        })
    })


    it('verify body message', ()=>{

        cy.getEcho().then((res)=>{
            expect(res.body).has.property("message", "Conflict!");
        })
    })


    it('verify headers - content-type', ()=>{

        cy.getEcho().then((res)=>{
            expect(res.headers).has.property("content-type","application/json;charset=utf-8");
        })
    })


    it('log response', ()=>{

        cy.getEcho().then((res)=>{
            cy.log(JSON.stringify(res))
        })
    })

})
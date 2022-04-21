///<reference types = 'cypress'/>

let mapId

describe("GET_mapID", ()=>
{
    beforeEach("fetch Data from mapId.json", ()=>{
        cy.fixture('mapId').then((mapData) => {
            mapId = mapData
        })
    })


    it("verify statusCode should be 200", ()=>{

        cy.request({
            method: "GET",
            url: "/map/" + mapId.two_main
        }).then((res)=>{
            expect(res.status).to.equal(200);
        })
    })

    it("verify headers - contentType is svg", ()=>{

        cy.request({
            method: "GET",
            url: "/map/" + mapId.two_main
        }).then((res)=>{
           expect(res.headers).has.property("content-type","image/svg+xml")
        })
    })
})
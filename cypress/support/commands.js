Cypress.Commands.add('logout', ()=>
{
    cy.request({
        method : "GET",
        url : "/auth/logout"
    })
})
Cypress.Commands.add('csrfRequest', ()=>
{
    cy.request({
        method : "GET",
        url : "/csrf/token"
    })
})
Cypress.Commands.add('getToken', ()=>
{
    cy.request
    ({
        method : "GET",
        url : "/csrf/token"
    }).then((response) => {
        const csrftoken = response.body.token
        return csrftoken
    })
        
})
Cypress.Commands.add('login', (username, password)=>
{
    cy.getToken()
        .then((csrftoken)=>{
            
            cy.request({
                method: "POST",
                url:"/auth/login",
                headers:{
                "X-CSRF-TOKEN": csrftoken,
                },
                failOnStatusCode: false,
                form: true,
                body: {
                    username: username,
                    password: password
                }
                
            })
        })
})

Cypress.Commands.add('getVersion',()=>{
    cy.request({
        method: "GET",
        url: "/pub/version"
    })
})

Cypress.Commands.add('getUser', ()=>{
    cy.request({
        method:"GET",
        url:"/auth/user"
    })
})

Cypress.Commands.add('getEcho', ()=>{
    cy.request({
        method: "GET",
        url : "/pub/echo?message=Conflict!&code=CONFLICT",
        failOnStatusCode: false
    })
})




/// <reference types="cypress" />


describe("API testing",()=>{

    let accessToken = "ce475b94aa0aa6eb4b4b3ebaf32e0c16e23aaee95b92f2a0479b793a7fb28a5b"
    let pattren = "abcdefghijklmnopqrstuvwxyz"
    let randomText="";
    var textmail=""

    
    it("api GET testing",()=>{
        cy.request({
           url:'https://gorest.co.in/public/v2/users',
           method:"GET",
           headers:{
            'authorization':'Bearer '+ accessToken
           }
        }).then((res)=>{
            expect(res.status).to.be.eq(200)
    })

    it("api POST testing",()=>{
        for(let i=0;i<10;i++){
            randomText+=pattren.charAt(Math.floor(Math.random() * pattren.length))
            textmail = randomText+ "@hotmail.com"
        }

        cy.request({
            url:'https://gorest.co.in/public/v2/users',
            method:"POST",
            headers:{
                'authorization':'Bearer '+ accessToken
            },
            body:{
                "name": "Arifa shaik",
                "email": textmail,
                "gender": "Female",
                "status": "active"
            },
            failOnStatusCode: false,
            }).then((res)=>{
                expect(res.body).has.property("name","Arifa shaik")
            })
    })
    
    
    })
})

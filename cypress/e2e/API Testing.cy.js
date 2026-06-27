describe('GET- All Users',()=>
{
    // it('get- all users',()=>
    // {
    //     cy.request(
    //         {
    //             method:"GET",
    //             url:"https://jsonplaceholder.typicode.com/users"
    //         }
    //     ).then((Response)=>
    //     {
    //         expect(Response.status).to.equal(200)
    //         expect(Response.body).to.be.an("Array")
    //         expect(Response.body).have.length(10)
    //         expect(Response.body[0]).to.have.property("email")
    //         expect(Response.body[0].phone).to.equal("1-770-736-8031 x56442")
    //         cy.log(JSON.stringify(Response.body))
    //     })
    // })

    // it('get-single user',()=>
    // {
    //     cy.request(
    //         {
    //             method:"GET",
    //             url:"https://jsonplaceholder.typicode.com/users/1"
    //         }
    //     ).then((response)=>
    //     {
    //         expect(response.status).to.equal(200)
    //         expect(response.body.id).to.equal(1)
    //         expect(response.body).to.have.property('name')
    //         cy.log(JSON.stringify(response.body))
    //     })
    // })

    // it('post',()=>
    // {
    //     cy.request(
    //         {
    //             method:"POST",
    //             url:"https://jsonplaceholder.typicode.com/users",
    //             body:
    //             {
    //                 company:"abc",
    //                 salary:"45000"
    //             }
    //         }).then((response)=>
    //         {
    //             expect(response.status).to.equal(201)
    //             //expect(response.body).have.length(10)
    //             expect(response.body).to.have.property("company")
    //             expect(response.body.salary).to.equal('45000')
    //             cy.log(JSON.stringify(response.body))
    //         })
    // })


    // it('put request',()=>
    // {
    //     cy.request(
    //         {
    //             method:"PUT",
    //             url:"https://jsonplaceholder.typicode.com/users/1",
    //             body:
    //             {
    //                 "name":"Hari"
    //             }
    //         }
    //     ).then((response)=>
    //     {
    //         expect(response.status).to.equal(200)
    //         expect(response.body.name).to.equal("Hari")
    //         cy.log(JSON.stringify(response.body))
    //     })
    // })

    //  it('patch request',()=>
    // {
    //     cy.request(
    //         {
    //             method:"PATCH",
    //             url:"https://jsonplaceholder.typicode.com/users/1",
    //             body:
    //             {
    //                 "name":"Hari"
    //             }
    //         }
    //     ).then((response)=>
    //     {
    //         expect(response.status).to.equal(200)
    //         expect(response.body.name).to.equal("Hari")
    //         cy.log(JSON.stringify(response.body))
    //     })
    // })

     it('delete request',()=>
    {
        cy.request(
            {
                method:"DELETE",
                url:"https://jsonplaceholder.typicode.com/users/1",
            }
        ).then((response)=>
        {
            expect(response.status).to.equal(200)
            //expect(response.body.name).to.equal("Hari")
            cy.log(JSON.stringify(response.body))
        })
    })
})
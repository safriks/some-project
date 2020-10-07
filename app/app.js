/**
 * require:
 *      
 * api - to handle routes and connect requests to appropriate controllers
 * controllers - to pass to API
 * 
 * create event emitter instance, pass it to api to be passed on to controllers and then services
 * 
 * 
 */
const express = require("express");
const app = express();

// static route for API docs (normally in a different folder)


const doc = {
    customers: {
        register: {
            path: "/api/customer/create",
            method: "POST",
            description: "register as a new customer",
            requiredFields: [
                {name: string},
                {}
            ],
            optionalFields: []
        }
    },
    vendors: {},
    products: {},
    listings: {
        closeListing: {
            path: "/api/listing/close"
            method "POST",
            description: "withdraw an existing lisitng form your offerings",
            requiredFields: {id: "INT"}
        }
    }

}

app.get("/api/", (req,res)=>{
    res.json(doc)
})



 /* 
 * 
 * 
 * export app
 */

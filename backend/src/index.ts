import express from 'express';
import { graphqlHTTP } from 'express-graphql' ;
import cors from 'cors' //TODO: to connect to REACT apparently
import { createConnection } from 'typeorm'; //to connect to db
import {schema} from './schema';
import {Users} from './Entities/users';
import {Company} from './Entities/company';

const main = async () => {

    await createConnection({
        type: "mysql",
        database: "graphqlcrud",
        username: "root",
        password: "@dmin123",
        logging: true,
        synchronize: false,
        entities: [Users, Company],
    });
    

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true //api tester provided by graphql
    }))

    app.listen(3001, ()=>{
        console.log("SERVER RUNNING ON PORT 3001")
    })
};

main().catch((err) =>{
    console.log(err);
});
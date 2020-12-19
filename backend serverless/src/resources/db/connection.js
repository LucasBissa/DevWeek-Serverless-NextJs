const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:<senha aqui>@cluster0.u1a7o.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if(!conn) {
        conn = mongoose.connect(URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        await conn
    }
}
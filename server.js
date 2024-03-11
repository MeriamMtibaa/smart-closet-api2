const express = require("express");
//importina el express li sabineha
const mongodb = require('mongodb');
const cors = require("cors")
require('./config/connect');

//aya fonction express tkoun app.fonction()
const app = express();
app.use(express.json());

const morgan = require("morgan")

const beneficiaryRoute = require('./routes/beneficiary-route')
const adminRoute = require('./routes/admin-route')
const articleRoute = require('./routes/article-route')
const blocRoute = require('./routes/bloc-route')
const categoryRoute = require('./routes/category-route')
const closetRoute = require('./routes/closet-route')
const contributorRoute = require('./routes/contributor-route')
const drawerRoute = require('./routes/drawer-route')
const ownerRoute = require('./routes/owner-route')
const productRoute = require('./routes/product-route')
const supplierRoute = require('./routes/supplier-route')
const orderRoute = require('./routes/order-route')

const path = require('path')

app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "uploads")));

app.use(cors())
app.use('/api/admin', adminRoute)
app.use('/api/article', articleRoute)
app.use('/api/beneficiary', beneficiaryRoute)

app.use('/api/bloc', blocRoute)
app.use('/api/category', categoryRoute)
app.use('/api/closet', closetRoute)
app.use('/api/contributor', contributorRoute)
app.use('/api/drawer', drawerRoute)
app.use('/api/owner', ownerRoute)
app.use('/api/product', productRoute)
app.use('/api/supplier', supplierRoute)
app.use('/api/order', orderRoute)



app.listen(3002, (err) => {
    if (err) {
        console.log('erreur de connexion');
    } else {
        console.log(' mriiiigueeel jawou behi el Server is listening to port 3002 ');
    }

})


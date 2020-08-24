const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { moongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products.routes'));

// Static files
app.use( express.static( path.join(__dirname,'public') ) );

app.listen( app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
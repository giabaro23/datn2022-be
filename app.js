const express = require('express')
const app = express()
const PORT = 3000;
const bodyParser = require('body-parser');
const {
    verifyToken
} = require('./common/jwt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



// Implement router
const signup = require('./router/signup');
const login = require('./router/login');
const usersMgmt = require('./router/usersMgmt');
const logout = require('./router/logout');
const categoryMgmt = require('./router/categoryMgmt');
const jobMgmt = require('./router/jobMgmt');

let middleware = {
    checkToken: async function (req, res, next) {
        try {
            if (ignoreAuthentication(req)) return next();
            if (ignoreAuthenticationGET(req)) return next();
            let token = req.body.token || req.headers['authorization'];
            if (!token || token === 'null' || token === 'undefined') {
                return res.status(403).send('A token is requirement for authentication!')
            }

            let decoded = await verifyToken(token);
            if (decoded && Object.keys(decoded.userInfo).length > 0) {
                req.userInfo = decoded.userInfo;
                return next();
            }

            return res.status(401).send('Invalid token!')
        } catch (error) {
            console.log(error);
            return res.status(401).send(error.msg);
        }
    }
}

let ignoreAuthentication = function (req) {
    let requestPath = req.url.split("?")[0];
    if (requestPath === "/signup" || requestPath === "/login") {
        return true;
    } else {
        return false;
    }

};

let ignoreAuthenticationGET = function (req) {
    if (req.method === 'GET' && Object.keys(req.query).length == 0) {
        return true;
    } else {
        return false;
    }

};


const server = app.listen(PORT, function () {
    console.log('Node.js is listening to PORT:' + server.address().port);
});

app.use(middleware.checkToken);

// Implement api
const apiUrl = '/api/v1/';

app.use('/signup', signup);
app.use('/login', login);
app.use('/profile', usersMgmt);
app.use('/logout', logout);
app.use('/category', categoryMgmt);
app.use('/job',jobMgmt)
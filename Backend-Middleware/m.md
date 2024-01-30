Types of Middleware

<hr>

1. Application level Middleware --> app.use(req,res, next).....
2. Router-level Middleware --> app.use('/blog', blog)....
3. Error-handling Middleware --> app.use(err, req, res, next)..
4. Built in middleware --> express.static , express.json, express.urlencoded
5. Third-party middleware --> npm install cookie-parser
   const cookieParser = require('cookie-parser)
   app.use(cookieParser)  
    // Therefore in third party middleware --> someone else already written the code for that middleware and we are just importing it and using it.

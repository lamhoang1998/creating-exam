// remember whenever using req: Request as a parameter in any method, Request has to be export from express. it caused bug when integrating user into the Request object after validate token.

//protect route:
//route not having @Public() decorator will require token. we do need to use JwtAuthGuard in main.ts at first to run canActive. JwtAuthGuard object is like a middleware running before the method in controller file to check if token is required, it will check if Is_public is used, if not it will run the passport strategy file to validate token then extract user from database and send it back down to the handleRequest file to integrate it into the express request object.

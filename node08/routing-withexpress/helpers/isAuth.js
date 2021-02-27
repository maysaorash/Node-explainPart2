const isAuth = (req,middleRes,next)=>{
    const isAuthorized = false;
    if (isAuthorized) {
        next();
    } else {
        middleRes.send("You have no authority. Please login... From URL:"+req.url)
    }
}

module.exports = isAuth;
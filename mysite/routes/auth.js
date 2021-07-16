module.exports = function(req, res, next) {
    if (req.session.authUser) { // 로그인한 사용자가 없으면
        next();    
        return;
    }
    if (req.accepts('html')){
        res.redirect('/user/login'); 
        return;
    }
    res.send({
        result : "fail",
        data : null,
        message : "auth fail"
    });
}
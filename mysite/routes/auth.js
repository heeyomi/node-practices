module.exports = function(req, res, next) {
    if (req.session.authUser == null) { // 로그인한 사용자가 없으면
        res.redirect('/user/login');    // login으로 보냄
        return;
    }
    next();    
}
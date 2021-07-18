module.exports = function(role){

    return function(req, res, next) {
        if (req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN')) {
            next();
            return;
        }

        if (req.accepts('html')){
            // 로그인을 아예 안함 => 로그인으로 보냄
            // 로그인 했는데 ADMIN이 아님 => 메인으로 보냄
            res.redirect(req.session.authUser ? '/' : '/user/login'); 
            return;
        }

        res.send({
            result : "fail",
            data : null,
            message : "auth fail"
        });
    }
}
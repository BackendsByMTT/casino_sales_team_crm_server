const { cookie } = require('express/lib/response');
var jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const cookie = req.body.userToken;
    if (cookie) {
        jwt.verify(cookie, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err.message);
                return res.status(201).json({ error: "You are not authenticated" })
            } else {

                req.body = { ...req.body, designation: decoded.designation, role: decoded.role, email:decoded.email }
                next()

            }
        });

    } else {
        return res.status(201).json({ error: "You are not authenticatedd" })
    }
}

const verifyTokenforUpdateUser = (req, res, next) => {

    const cookie = req.body.userToken;
    if (cookie) {
        jwt.verify(cookie, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err.message);
                return res.status(201).json({ error: "You are not authenticated" })
            } else {

                if (decoded.role === "manager" || decoded.role === "bigboss")
                    req.body = { ...req.body, designation: decoded.designation, role: decoded.role }
                else
                    return res.status(201).json({ error: "You are not authenticatedd" })
                next()

            }
        });

    } else {
        return res.status(201).json({ error: "You are not authenticatedd" })
    }
}

const verifyTokenforCreateUser = (req, res, next) => {

    verifyTokenforUpdateUser(req, res, next)
}

const verifyTokenfor = (req, res, next) => {

    const cookie = req.body.userToken;
    if (cookie) {
        jwt.verify(cookie, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err.message);
                return res.status(201).json({ error: "You are not authenticated" })
            } else {

                req.body = { ...req.body, designation: decoded.designation, role: decoded.role }
                next()

            }
        });

    } else {
        return res.status(201).json({ error: "You are not authenticatedd" })
    }
}

module.exports = { verifyToken ,verifyTokenfor,verifyTokenforCreateUser,verifyTokenforUpdateUser}
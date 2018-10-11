

const adminKey = 'ducteil.n@gmail.com'

export const isAdmin = (req, res, next) => {
  if(req.user.email !== adminKey){
    // req.user.isAdmin == true;
    return res.json({err: 'unauthorized, not an admin'})
  }
  next()
}

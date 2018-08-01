

const adminKey = 'ducteil.n@gmail.com'

export const isAdmin = (req, res, next) => {
  if(req.user.email !== adminKey){
    return res.json({err: 'unauthorized, not an admin'})
  }
  next()
}

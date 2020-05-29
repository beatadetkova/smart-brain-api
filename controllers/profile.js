const handleProfileGet = (db) => (req, res) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
    if(user.lenght) {
      res.json(user[0])
    } else {
      res.status(400).json('Not found')
    }
  })
  .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfileGet
}

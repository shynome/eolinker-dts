const path = require('path')
const config = require('@/config')

const app = exports.app = require('express')()

app.engine('handlebars', require('express-handlebars')())
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'))

app.use(/^\/$/, (req, res) => {
  res.redirect('/list/')
})

app.use('/list/', require('./list'))

app.use('/project_dts/',require('./project_dts'))

app.listen(config.SERVER_PORT, function () {
  // @ts-ignore
  console.log(`server listen at ${this.address().port}`)
})

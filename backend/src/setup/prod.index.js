// components
import app from './server'
import './mongodb'
import '../logic/main/route'


app.listen(4240, () => console.log('Server Running!'))

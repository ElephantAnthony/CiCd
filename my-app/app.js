const express = require('express');
const app = express();
const port = 3002;

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
	res.json({ message: 'Hi!'});
});

app.use('/myweb/api/v1', apiRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

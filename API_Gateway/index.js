const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const ratelimit = require('express-rate-limit');
const axios = require('axios');

const app = express();
const PORT = 3005;

const limiter = ratelimit ({
      windows: 2*60*1000,
      max: 5,
})

app.use(morgan('combined'));
app.use(limiter);

app.use('/bookingservice', async (req,res,next) => {
    console.log(req.headers['x-access-token']);
    try{
        const response = await axios.get('http://localhost:3001/api/v1/isAuthenticated', {
        headers: {
            'x-access-token': req.headers['x-access-token']
        }
    });
     console.log(response.data);
     if(response.data.success)
         next();
    else{
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    }catch(error){
        return res.status(500).json({
            message: 'Unauthorize'
        })
    }  
     
})
app.use('/bookingservice', createProxyMiddleware({
    target: 'http://localhost:3002/bookingservice',
    changeOrigin: true,
}));

app.get('/home', (req, res) => {
    res.json({ message: "OK" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
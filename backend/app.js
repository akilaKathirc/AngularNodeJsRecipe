const express = require('express');


const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: 'adfsdf',
      title: 'FirstPost',
      content: '1. from the server'
    },
    {
      id: 'gegcgh',
      title: 'SecondPost',
      content: '2.from the server'
    },
    {
      id: 'vbnvb',
      title: 'ThirdPost',
      content: '3.from the server'
    }
  ];
  res.status(200).json({
    message: 'Psts fetched successfully',
    posts: posts
  });

});




module.exports = app;

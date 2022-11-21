const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const { Post } = require('./db/models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/posts', async (req, res) => {
  const allPosts = await Post.findAll({ order: [['createdAt', 'DESC']] });
  res.json(allPosts);
});

app.post('/posts', async (req, res) => {
  const { message } = req.body;
  const newPost = await Post.create({ message });
  res.json(newPost);
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Post.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));

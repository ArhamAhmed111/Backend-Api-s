import express from 'express';
import { postRoute } from './Routes/PostRoutes.js';  // Ensure this path is correct
import { userRoute } from './Routes/UserRoutes.js';  // Correct import for userRoute
import { albumRoute } from './Routes/AlbumRoutes.js';
import { todoRoute } from './Routes/TodoRoutes.js';
import { photoRoute } from './Routes/PhotoRoutes.js';
import { commentRoute } from './Routes/CommentRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors())

// Default route (home route)
app.get("/", (req, res) => {
  res.send('Welcome to PlaceHolder');
});

// Use the postRoute for '/post' path
app.use('/posts', postRoute);

// Use the userRoute for '/user' path
app.use('/users', userRoute);
app.use('/albums', albumRoute);
app.use('/todos',todoRoute)
app.use('/photos',photoRoute)
app.use('/comments',commentRoute)

// Set the port (use process.env.PORT for environment-based ports if needed)
const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

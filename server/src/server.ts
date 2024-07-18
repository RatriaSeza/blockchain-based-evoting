import app from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

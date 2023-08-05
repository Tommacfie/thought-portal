import mongoose from '../../models/index';

(async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    return;
  } catch (error) {
    return error;
  }
})();

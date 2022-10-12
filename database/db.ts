import mongoose from 'mongoose';

/**
 * Status of mongoose:
 * 0 = disconnected.
 * 1 = connected.
 * 2 = connecting.
 * 3 = disconnecting.
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log('Connection already Elis');
    return;
  }
  // console.log('Elis MonConn:', mongoose.connections);

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    // console.log('Elis MonConn:', mongoose.connections);

    if (mongoConnection.isConnected === 1) {
      console.log('using previous connection Elis');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URI || '');
  mongoConnection.isConnected = 1;

  console.log('conected to MongoDB Elis:', process.env.MONGO_URI);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();

  mongoConnection.isConnected = 0;

  console.log('Disconnect from MongoDB');
};

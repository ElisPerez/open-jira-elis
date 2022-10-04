import mongoose from 'mongoose';

/**
 * Status of mongoose:
 * 0 = disconnected.
 * 1 = connected.
 * 2 = connecting.
 * 3 = disconnecting.
 */

const mongooConnection = {
  isConnected: 0,
};

export const connet = async () => {
  if (mongooConnection.isConnected) {
    console.log('Connection already Elis');
    return;
  }
  console.log('Elis MonConn:', mongoose.connections);

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;
    console.log('Elis MonConn:', mongoose.connections);

    if (mongooConnection.isConnected === 1) {
      console.log('using previous connection Elis');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URI || '');
  mongooConnection.isConnected = 1;

  console.log('conected to MongoDB Elis:', process.env.MONGO_URI);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log('Disconnect from MongoDB');
};

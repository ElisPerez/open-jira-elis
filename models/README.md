# Mongoose
[Documentation](https://mongoosejs.com/docs/index.html)

How create a Schema?

```bash
import mongoose, { Model, Schema } from 'mongoose';

// The "I" in "IName" is to indicate that it is an interface
interface IName {
  prop1: number;
  prop2: string;
}

const nameSchema = new Schema(
  {
    prop1: { type: Number },
    prop2: { type: String, require: true },
  },
  { collection: 'names' } // Custom collection name 😎
);

const NameModel: Model<IName> = mongoose.models.Name || mongoose.model('Name', nameSchema);

export default NameModel;
```

# Collection Name:
[Option: collection](https://mongoosejs.com/docs/guide.html#collection)

- Mongoose by default produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. Set this option if you need a different name for your collection.

```bash
const nameSchema = new Schema({...}, { collection: 'myCustomCollectionName' });
```

# Nota importante:
Al hacer cambios en el modelo de mongoose hay que bajar y subir la app. Reiniciar el servidor es necesario para que los cambios surtan efecto.
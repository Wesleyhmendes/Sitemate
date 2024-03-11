import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

export default class UserModel extends Model<InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  }, 
  description: {
    type: DataTypes.STRING,
  }, 
}, {
  sequelize: db,
  modelName: 'user_info',
  timestamps: false,
})

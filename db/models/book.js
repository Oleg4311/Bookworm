const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, { through: models.Connect, foreignKey: 'bookId' });
      this.hasMany(models.Raiting, { foreignKey: 'bookId' });
    }
  }
  Book.init({
    picture: DataTypes.TEXT,
    nameBook: DataTypes.TEXT,
    author: DataTypes.TEXT,
    comments: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};

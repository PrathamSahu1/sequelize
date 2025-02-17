
module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      salary: {
        type: DataTypes.INTEGER,
        defaultValue:0,
      },
      department: {
        type: DataTypes.STRING
      }
    },
    {
      // Other model options go here
    //   timestamps: false
    createdAt: false,
    updatedAt: 'updated_at'
      
    },
  );

  return User;
}

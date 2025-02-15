
module.exports = (sequelize,DataTypes) => {
    const Contact = sequelize.define(
        'Contact',
        {
          // Model attributes are defined here
          addressFirstLine: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          addressSecondLine: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
          City:{
            type: DataTypes.STRING,
            allowNull: false
          }
        },
        {
          // Other model options go here
        //   timestamps: false
          
        },
      );

      return Contact;
    
}

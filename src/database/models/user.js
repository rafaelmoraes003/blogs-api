const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: DataTypes.STRING,
        email: {
            unique: true,
            type: DataTypes.STRING
        },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'Users',
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost,{
            foreignKey: 'userId',
            as: 'blogPosts',
        });
    };

    return User;
};

module.exports = User;
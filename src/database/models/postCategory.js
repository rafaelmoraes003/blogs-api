const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },
    }, {
        timestamps: false,
        tableName: 'PostCategories',
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });

        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    };

    return PostCategory;
}

module.exports = PostCategory;
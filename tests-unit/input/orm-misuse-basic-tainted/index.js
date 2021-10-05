const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    group: DataTypes.TEXT
});

const Post = sequelize.define("post", {
    title: DataTypes.TEXT,
    content: DataTypes.TEXT
});

// Make association
User.hasMany(Post);
Post.belongsTo(User);

(async () => {
    await sequelize.sync({ force: true });

    // Create users
    const jane = await User.create({ name: "Jane Doe", group: "Does" });
    const john = await User.create({ name: "John Doe", group: "Does" });
    const bob = await User.create({ name: "Bob Drip", group: "Drips" });

    // Create posts
    const janeP1 = await Post.create({ title: 'My First Post', content: 'Some vapid stuff.' });
    const janeP2 = await Post.create({ title: 'My Second Post', content: 'Some more vapid stuff.' });
    const johnP1 = await Post.create({ title: 'My First Post', content: 'Some vapid stuff.' });
    const bobP1 = await Post.create({ title: 'My First Post', content: 'Some vapid stuff.' });

    // Add posts to users
    await jane.addPost(janeP1);
    await jane.addPost(janeP2);
    await john.addPost(johnP1);
    await bob.addPost(bobP1);

    // Find all users
    const users = await User.findAll({
        where: {
            group: "Does"
        }
    });

    users.forEach(async user => {
        const posts = await Post.findAll({
            where: {
                userId: user.id
            }
        });
    });
})();
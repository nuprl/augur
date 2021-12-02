
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

console.log(sequelize);

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    group: DataTypes.TEXT
});

(async () => {
    console.log('[1]');
    await sequelize.sync({ force: true });
    console.log('[2]');
    const jane = await User.create({ name: "Jane Doe", group: "Does" });
    const john = await User.create({ name: "John Doe", group: "Does" });
    console.log('[3]');
    const user0 = await User.findOne({
        where: {
            name: "Jane Doe"
        }
    });
    console.log('[4]');
    const user1 = await User.findOne({
        where: {
            name: user0.name
        }
    });
    console.log('[5]');
})();
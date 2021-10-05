const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    group: DataTypes.TEXT
});

(async () => {
    await sequelize.sync({ force: true });
    
    const jane = await User.create({ name: "Jane Doe", group: "Does" });
    const john = await User.create({ name: "John Doe", group: "Does" });

    const user0 = await User.findOne({
        where: {
            name: "Jane Doe"
        }
    });
    const user0_name = user0.name;

    const user1 = await User.findOne({
        where: {
            name: user0_name
        }
    });

    console.log(user1);
})();
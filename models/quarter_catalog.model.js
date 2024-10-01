module.exports = (sequelize, Sequelize) => {
  const QuarterCatalog = sequelize.define(
    "quarter_catalog",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quarter: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.TIMESTAMP,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.TIMESTAMP,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "quarter_catalog",
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return QuarterCatalog;
};

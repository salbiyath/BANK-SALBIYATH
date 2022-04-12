module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("Customers", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nik: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jk: {
      type: Sequelize.ENUM("laki-laki", "perempuan"),
      allowNull: false,
    },
    alamat: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    no_hp: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });
  return Customer;
};

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customers", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING,
      unique: {
        msg: "NIK has been used",
      },
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jk: {
      type: DataTypes.ENUM("laki-laki", "perempuan"),
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    no_hp: {
      type: DataTypes.STRING,
      unique: {
        msg: "No HP has been used",
      },
      allowNull: false,
    },
  });
  return Customer;
};

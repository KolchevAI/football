module.exports = (sequelize, Sequelize) => {
    const Admins = sequelize.define("admins", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.VARCHAR
      },
      password: {
        type: Sequelize.VARCHAR
      },
      team_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Admins;
  };
  
  module.exports = (sequelize, Sequelize) => {
    const Coach = sequelize.define("coaches", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.VARCHAR
      },
      surname: {
        type: Sequelize.VARCHAR
      },
      birth_date: {
        type: Sequelize.DATE
      },
      duration_work: {
        type: Sequelize.INTEGER
      },
      playbook: {
        type: Sequelize.VARCHAR
      },
      num_teams: {
        type: Sequelize.INTEGER
      },
      contract_length: {
        type: Sequelize.DATE
      },
      trophies: {
        type: Sequelize.VARCHAR
      },
      team_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Coach;
  };


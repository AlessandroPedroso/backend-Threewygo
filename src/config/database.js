module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'threewygo',
  define: {
    //Essa opção indica que o Sequelize deve automaticamente adicionar duas colunas em cada tabela: created_at e updated_at.
    timestamps: true,

    //Essa opção define que o Sequelize deve utilizar naming convention (convenção de nomes) com snake_case (substituindo espaços ou letras maiúsculas por underline) para os nomes das colunas geradas automaticamente, em vez de usar o padrão camelCase.
    underscored: true,

    //um modelo tem um nome como UserGroup, com underscoredAll: true, o Sequelize cria a tabela no banco de dados com o nome user_group, em vez de UserGroups (que seria o padrão sem essa configuração).
    underscoredAll: true,
  },
};

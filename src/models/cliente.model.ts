import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public endereco!: string;
  public telefone!: string;
  public status!: string;
  public dtNascimento!: string;

}

export interface ClinteInterface {
    nome: string;
}

Cliente.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: new DataTypes.STRING(128),
      },
      endereco: {
        type: new DataTypes.STRING(255),
      },
      telefone: {
        type: new DataTypes.STRING(128),
      },
      status: {
        type: new DataTypes.STRING(128),
      },
      dtNascimento: {
        type: new DataTypes.DATEONLY,
      }
    },
    {
      tableName: "cliente",
      sequelize: database,
      timestamps: false
    }
);

Cliente.sync().then(() => console.log("Tabela Cliente criada"));

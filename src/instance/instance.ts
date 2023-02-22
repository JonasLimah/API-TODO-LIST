
import { Model,DataTypes } from "sequelize";
import { sequelize } from "../model/mysql";

export interface taskInstance extends Model {
    id: string,
    title: string,
    done: boolean
}

export const task = sequelize.define<taskInstance>("mysql",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    done:{
        type:DataTypes.TINYINT,
        defaultValue: false
    }
},
{
    tableName:"tarefas",
    timestamps:false
    
}
)


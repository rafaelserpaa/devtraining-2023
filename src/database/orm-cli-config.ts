import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1743375127858 } from "src/migrations/1743375127858-CreateCoursesTable";
import { CreateTagsTable1743376028475 } from "src/migrations/1743376028475-CreateTagsTable";
import { CreateCoursesTagsTable1743377374419 } from "src/migrations/1743377374419-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1743378038616 } from "src/migrations/1743378038616-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1743382902912 } from "src/migrations/1743382902912-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [
        CreateCoursesTable1743375127858,
        CreateTagsTable1743376028475,
        CreateCoursesTagsTable1743377374419,
        AddCoursesIdToCoursesTagsTable1743378038616,
        AddTagsIdToCoursesTagsTable1743382902912
    ],
})
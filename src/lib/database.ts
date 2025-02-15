export const config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    autoLoadEntities: true,
    synchronize: true, //DO NOT set this flag in production
}
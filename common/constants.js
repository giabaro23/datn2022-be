exports.PG_CONFIG = {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "postgres",
}

exports.PG_DB = {
    SCHEMA: 'public',
    USERS_INFORMATION: 'Users',
    CATEGORY: 'Category',
    CONVERSATION: 'Conversation',
    JOB_DETAIL: 'JobDetail',
    JOB_INFORMATION: 'JobInformation',
    LEVEL: 'Level',
    MESSAGE: 'Message',
    PAY_TYPE: 'PayType',
    PERMISSION: 'Permission',
    PROFILE_FREELANCER: 'ProfileFreelancer',
    RATING: 'Rating',
    ROLE: 'Role',
    SAVE_JOB:'SaveJob',
    WORK_TYPE: 'WorkType',
    CATEGORY_DETAIL: 'CategoryDetail',
} 

exports.ACCESS_TOKEN_SECRET = 'test@gmail.com';

exports.ROLE_USER = {
    1: 'freelancer',
    2: 'client',
    3: 'admin'
}
exports.seed = async function (knex) {
    await knex('resources').del()
    await knex('resources').insert([
        {
            resource_name: 'google',
            resource_description: 'search google to create tables and seeds',
        },
        {
            resource_name: 'BloomTech',
            resource_description: 'refer back to BloomTech on how to create tables',
        },
        {
            resource_name: 'module 4',
            resource_description: 'module 4 describes table creation',
        },
    ]);
};
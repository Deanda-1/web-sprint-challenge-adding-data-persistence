exports.seed = async function (knex) {
    await knex('projects').del()
    await knex('projects').insert([
        {
            project_name: 'Create table',
            project_description: 'Initial SQL table creation',
            project_completed: false
        },
        {
            project_name: 'Seed Table',
            project_description: 'Create seeds for tables',
            project_completed: true
        },
    ]);
};
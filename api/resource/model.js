const db = require('../../data/dbConfig')

function addResource(resource) {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources').where('resource_id', resource_id).first()
        })
}

async function getResources() {
    const resources = []
    const resourceRows = await db('resources as r')
        .select(
            'r.resource_id',
            'r.resource_name',
            'r.resource_description', 
        )
        .orderBy(
            'r.resource_id'
        )
    resourceRows.forEach(resource => {
        resources.push({
            resource_id: resource.resource.id,
            resource_name: resource.resource_name,
            resource_description: resource.resource.description,
        })
    })
    return resources 
}

module.exports = {
    addResource,
    getResources,
}
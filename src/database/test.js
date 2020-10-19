const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-19.9568709",
        lng: "-43.9465082",
        name: "Lar para Meninos",
        about: "Presta assistência a crianças de 0 a 17 anos que se encontre em situação de abandono.",
        whatsapp: "21987654321",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80",
            "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
            "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1444840535719-195841cb6e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        ].toString(),
        instructions: "Venha da melhor forma que te deixe a vontade e traga muita alegria.",
        opening_hours: "Horário de visitas Das 10h até as 16h",
        open_on_weekends: "0"
    })
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orfanato
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //apagar um dado da tabela
    // console.log( await db.run('DELETE FROM orphanages WHERE id="1"'))
})
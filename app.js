db.prueba.update({
    "_id": ObjectId("615d0bacc0e8cdcedeebc3f7")
}, {
    '$set': {
        "2019.enero.17": {
            "datos": [{
                "dato1": "pez",
                "dato2": "perro"
            }, {
                "dato1": "pez",
                "dato2": "perro"
            }, {
                "dato1": "pez",
                "dato2": "perro"
            }]
        }
    }
})
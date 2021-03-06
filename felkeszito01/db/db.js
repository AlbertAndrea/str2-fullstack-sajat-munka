const fsp = require('fs').promises
const { join } = require('path')

const buildingsPath = join(__dirname, 'buildings.json')
//elérési út
//console.log(buildingsPath)

//beolvassa a fájlt és tömböt készít az adatokból
const loadData = async () => {
    const rawJson = await fsp.readFile(buildingsPath, 'utf8')
    return JSON.parse(rawJson)
}

// ( async () => {
//     const data = await loadData()
//     console.log(data);
// })()

//kap egy tömböt, sima stringet csinál és beleírja a fájlba
//felülírja a fájl tartalmát
const storeData = async (list = []) => {
    const rawJson = JSON.stringify(list)
    await fsp.writeFile(buildingsPath, rawJson, 'utf8')
}

const getAll = async () => {
    const list = await loadData()
    return list
}

const getOne = async (id = 0) => {
    const list = await loadData()
    return list.find(item => item.id === id)
}

const update = async (entity = {id: 0}) => {
    const list = await loadData()
    const index = list.findIndex( i => i.id === entity.id)

    if (index > -1) {
        list.splice(index, 1, entity)
        await storeData(list)
        return true
    }

    return false
}

const create = async (entity = {id: 0}) => {
    const list = await loadData()
    const nextID = list[list.length - 1].id + 1
    entity.id = nextID

    list.push(entity)

    await storeData(list)

    return true
}

const remove = async (id = 0) => {
    const list = await loadData()
    const index = list.findIndex( i => i.id === id)

    if (index > -1) {
        list.splice(index, 1)
        await storeData(list)
        return true
    }

    return false
}

module.exports = Object.freeze({
    buildingsPath,
    loadData,
    getAll,
    getOne,
    create,
    update,
    remove
})

// ( async () => {
//     //{"id":5,"name":"MolTorony","year":1943,"address":"Budapest","active":true}
//     const entity = {"id":5,"name":"TEVA","year":1943,"address":"Debrecen","active":true}
//     const response = await update(entity)
//     console.log(response)

//     const e2 = await getOne(7)
//     console.log(e2)
// })()

// ( async () => {
//     //{"id":5,"name":"MolTorony","year":1943,"address":"Budapest","active":true}
//     const entity = {"name":"Víztorony","year":1972,"address":"Debrecen","active":true}
//     const response = await remove(101)
//     console.log(response)

//     const e2 = await getOne(101)
//     console.log(e2)
// })()

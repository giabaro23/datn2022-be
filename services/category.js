const pg = require('../model');

exports.createCategory = async (categoryInfo) => {
    let category = new pg.category();
    return await category
        .save(categoryInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.getListCategory = async () => {
    let category = new pg.category();
    return await category.get().then((res) => {
        return res.rows;
    }).catch((error) => {
        console.log(error);
        throw new Error(error)
    })
}

exports.createCategoryDetail = async (categoryInfo) => {
    let category = new pg.category();
    return await category
        .saveDetail(categoryInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.getListAll = async () => {
    let category = new pg.category();
    return await category
    .getListCategory()
    .then ((res) => {
        return res.rows;
    })
    .catch((err) => {
        console.error(err);
        throw new Error(err);
    })
}

exports.update = async (categoryInfo) => {
    let category = new pg.category();
    return await category
        .update(categoryInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.updateDetail = async (categoryInfo) => {
    let category = new pg.category();
    return await category
        .updateDetail(categoryInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.delete = async (categoryInfo) => {
    let category = new pg.category();
    return await category
        .delete(categoryInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}
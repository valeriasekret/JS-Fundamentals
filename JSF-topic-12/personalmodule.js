const currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function (name) {
    const hour = currentDate.getHours();
    switch (true) {
        case hour >= 6 && hour < 12:
            return `Доброго ранку, ${name}`;
        case hour >= 12 && hour < 18:
            return `Доброго дня ${name}`;
        case hour >= 18 && hour < 0:
            return `Доброго вечора, ${name}`;
        case hour >= 0 && hour < 6:
            return `Доброї ночі, ${name}`;
    }
}
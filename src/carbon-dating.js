const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
    let num = 1 <= parseFloat(sampleActivity) && parseFloat(sampleActivity) < 15 ? parseFloat(sampleActivity) : NaN;
    return !isNaN(num) && typeof num == "number" && typeof sampleActivity == "string" ? Math.ceil(Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD / 0.693) : false;
};
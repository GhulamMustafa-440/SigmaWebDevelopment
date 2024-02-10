let rand = Math.random();
let first, second, third;

function bussinessNameGenerator() {
    // Let's generate first word
    if (rand <= 0.33) {
        first = "Crazy";
    } else if (rand > 0.33 && rand <= 0.66) {
        first = "Amazing";
    } else {
        first = "Fire";
    }

    // Let's generate second word
    rand = Math.random();
    if (rand <= 0.33) {
        second = "Engine";
    } else if (rand > 0.33 && rand <= 0.66) {
        second = "Foods";
    } else {
        second = "Garments";
    }

    // Let's generate third word
    rand = Math.random();
    if (rand <= 0.33) {
        third = "Bros";
    } else if (rand > 0.33 && rand <= 0.66) {
        third = "Limited";
    } else {
        third = "Hub";
    }

    console.log(`${first}-${second}-${third}`)
}

bussinessNameGenerator()
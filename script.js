function findWeight(arr, weight) {
    let map = {};
    let matches = [];
    let difference;

    for (num of arr) {
        difference = weight - num;

        if (map[num] !== undefined) {
            matches.push([num, map[num]]);
        } else {
            map[difference] = num;
        }
    }
    if (matches.length) {
        return matches;
    } else {
        return -1;
    }
}

function countOccurrences(arr, query) {
    let map = {};
    let largest = 0;
    let largestKey;

    for (item of arr) {
        if (map[item] !== undefined) {
            map[item] += 1;
        } else {
            map[item] = 1;
        }
    }

    if (query) {
        if (map[query]) {
            return [query, map[query]];
        } else {
            return [query, 0];
        }
    } else {
        for ([key, value] of Object.entries(map)) {
            if (value > largest) {
                largest = value;
                largestKey = key;
            }
        }
        return [largestKey, largest];
    }
}
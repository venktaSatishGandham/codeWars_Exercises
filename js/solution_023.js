/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6] */

function vowelIndices(word) {
    let d = word.toLowerCase().split("");
    let newarry = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i] === "a" || d[i] === "e" || d[i] === "i" || d[i] === "o" || d[i] === "u" || d[i] === "y") {
            let m = i + 1
            newarry.push(m)
        }
    }
    return newarry

}
//let f = vowelIndices("YoMampoooa")
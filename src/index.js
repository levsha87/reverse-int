module.exports = function reverse (n) {
        let rev = [];
        n = Math.abs(n);
        rev = n.toString().split('').reverse();
        let result = rev.join("");
        return result;
}

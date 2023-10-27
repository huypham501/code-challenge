// Three ways to sum to n
// Formular that sum 1 to n
// (number of pairs) * (sum of each pair)
var sum_to_n_a = function (n) {
    return (n / 2) * (n + 1);
};
console.log(sum_to_n_a(5));
console.log(sum_to_n_a(1));
console.log(sum_to_n_a(99999));
// Gauss formular ((last - first + 1) * (last + first)) / 2 with first = 1
// the shorten would be below
var sum_to_n_b = function (n) {
    return (n * (n + 1)) / 2;
};
console.log(sum_to_n_b(5));
console.log(sum_to_n_b(1));
console.log(sum_to_n_b(99999));
// Recursive
var sum_to_n_c = function (n) {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
};
console.log(sum_to_n_c(5));
console.log(sum_to_n_c(1));
// Reduce n to avoid stack overflow
console.log(sum_to_n_c(999));

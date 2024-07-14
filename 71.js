// https://leetcode.com/problems/simplify-path/submissions/1320666470/
const simplifyPath = function (path) {
    let stack = [];
    for (let portion of path.split("/")) {
        if (portion === "..") {
            if (stack.length) {
                stack.pop();
            }
        } else if (portion !== "." && portion) {
            stack.push(portion);
        }
    }
    return "/" + stack.join("/");
};
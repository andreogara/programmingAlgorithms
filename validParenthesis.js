var isValid = function(s) {
    var stack = [];
    var open = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };

    for (var i = 0; i < s.length; i ++) {
        var chr = s[i];
        if (open[chr]) {
            stack.push(chr);
        } else if (closed[chr]) {
            if (open[stack.pop()] !== chr) return false;
        }
    }

    return stack.length === 0? true:false;
};
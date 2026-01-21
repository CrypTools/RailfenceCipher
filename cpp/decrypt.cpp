// ==============================================================================
//
//    Use:
//    decrypt("HWe o!lordll", 4)
//    => "Hello World!"
//
// ==============================================================================

#include <string>

std::string decrypt(std::string s, int n) {
    if(n<2) return s; 

    std::string res = s;

    int a = -1, b = 2 * (n - 1) - 1, c = a, idx = 0;

    for(int i=0; i<n; i++) {
        int j = i;

        while(j<s.length()) {
            res[j] = s[idx];
            idx++;

            if(a>0 && b>0) c = c == a ? b : a;
            else c = a > b ? a : b;

            j += c + 1;
        }

        a += 2;
        b -= 2;
        c = a;
    }

    return res;
}
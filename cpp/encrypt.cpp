// ==============================================================================
//
//    Use:
//    encrypt("Hello World", 4)
//    => "HWe o!lordll"
//
// ==============================================================================

#include <string>

std::string encrypt(std::string s, int n) {
    if(n<2) return s; 

    std::string res;

    int a = -1, b = 2 * (n - 1) - 1, c;

    for(int i=0; i<n; i++) {
        int j = i;

        while(j<s.length()) {
            res += s[j];
            
            if(a>0 && b>0) c = (c == a ? b : a);
            else c = a > b ? a : b;

            j += c + 1;
        }

        a += 2;
        b -= 2;
        c = a;
    }

    return res;
}
# ==============================================================================
#
#    Use:
#    Enter the cipher: HWe o!lordll
#    Enter the number of rails: 4
#    => "Hello World!"
#
# ==============================================================================


def decrypt(s,n):
    fence = [[] for i in range(n)]
    rail  = 0
    var   = 1

    for char in s:
        fence[rail].append(char)
        rail += var

        if rail == n-1 or rail == 0:
            var = -var

    rFence = [[] for i in range(n)]

    i = 0
    l = len(s)
    s = list(s)
    for r in fence:
        for j in range(len(r)):
            rFence[i].append(s[0])
            s.remove(s[0])
        i += 1

    rail = 0
    var  = 1
    r = ''
    for i in range(l):
        r += rFence[rail][0]
        rFence[rail].remove(rFence[rail][0])
        rail += var

        if rail == n-1 or rail == 0:
            var = -var

    return r

cipher_text=input("Enter the cipher: ")
rail_len=input("Enter the number of rails: ")
rail_len = int(rail_len)
plain_text = decrypt(cipher_text, rail_len)
print(plain_text)

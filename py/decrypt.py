def decrypt(s, n):
    clen = 2*n - 2
    c = ceil(len(s) / clen)
    l = len(s)

    if (l / clen) % 1 == 0:
        c += 1

    fence = [[] for i in range(n)]
    rlen  = [2*c for i in range(n)]
    rlen[0] = c
    rlen[n-1] = c

    var  = 1
    rail = 1

    s = list(s)

    for i in range(clen - l % clen):
        rlen[rail] -= 1
        rail += var

        if rail == n-1 or rail == 0:
            var = -var

    rail = 0
    for i in list(reversed(rlen)):
        for j in range(i):
            fence[rail].append(s.pop())
        rail += 1

    fence = list(reversed(fence))

    rail = 0
    var = 1

    r = ''

    for i in range(l):
        r += fence[rail].pop()
        rail += var

        if rail == n-1 or rail == 0:
            var = -var

    return r

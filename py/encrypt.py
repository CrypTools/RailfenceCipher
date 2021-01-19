# ==============================================================================
#
#    Use:
#    Enter the message: Hello World!
#    Enter the number of rails: 4
#    => "HWe o!lordll"
#
# ==============================================================================

def encrypt(s,n):
  fence = [[] for i in range(n)]
  rail  = 0
  var   = 1

  for char in s:
    fence[rail].append(char)
    rail += var

    if rail == n-1 or rail == 0:
      var = -var

  res = ''
  for i in fence:
    for j in i:
      res += j

  return res

plain_text=input("Enter the message: ")
rail_len=input("Enter the number of rails: ")
rail_len = int(rail_len)
cipher_text = encrypt(plain_text, rail_len)
print(cipher_text)

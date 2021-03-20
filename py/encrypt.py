# ==============================================================================
#
#    Use:
#    encrypt("Hello World", 4)
#    => "HWe o!lordll"
#
# ==============================================================================

def encrypt(s,n):
  fence = ["" for i in range(n)]
  rail  = 0
  var   = 1

  for char in s:
    fence[rail] += char
    rail += var

    if rail == n-1 or rail == 0:
      var = -var

  return "".join(fence)

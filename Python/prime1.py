def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


def test_is_prime():
    # Test for prime numbers
    assert is_prime(2) == True
    assert is_prime(3) == True
    assert is_prime(5) == True
   

    # Test for non-prime numbers
    assert is_prime(1) == False
    assert is_prime(4) == False
    assert is_prime(6) == False

   

if __name__ == '__main__':
    test_is_prime()
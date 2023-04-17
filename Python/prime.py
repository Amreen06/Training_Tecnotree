#PROGRAM 2
# implementation of the is_prime function in Python
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True
    
    
# failing test case 
def test_is_prime():
    assert is_prime(3) == True
is_prime();
    
# minimal code required to pass the test, Run the test and refactor the code
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True
#additional test cases
def test_is_prime():
    assert is_prime(7) == True
    assert is_prime(2) == True
    assert is_prime(31) == True
    assert is_prime(10) == False
    assert is_prime(100) == False

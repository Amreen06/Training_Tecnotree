import time
#time to rin the code
def my_hello():
# some code here   
    time.sleep(2) 
#simulate some time-consuming
start_time = time.perf_counter()
end_time = time.perf_counter()

print("Time taken:",end_time - start_time, "seconds")
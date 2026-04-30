import json
import numpy as np
import time

def handler(request):
    try:
        n = int(request.get("n", 200))

        A = np.random.rand(n, n)
        B = np.random.rand(n, n)

        start = time.time()
        C = np.dot(A, B)
        end = time.time()

        return {
            "statusCode": 200,
            "body": json.dumps({
                "size": n,
                "time": end - start
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": str(e)
        }

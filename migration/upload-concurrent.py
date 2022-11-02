from cloudinary.uploader import upload
import json
import time

def migrate():
    def uploadSingle(data):
        upload(data.)
        result = session.put(url, verify=verifySSL, headers=header, data=payload)
        response = result.json()
        print(response)
        return result
    start = time.time()

    f = open("./migration/images.json", 'r')
    data_list = json.load(f) 
    f.close()   
       
    for k,v in permissions_roleprivs.items():
        perm_code = v["permissionCode"]
        perm_access = v["access"]
        payload = json.dumps(
            {"permissionCode": perm_code, "access": perm_access}
        )
        futures.append(executor.submit(upload,payload)) #for k,v in permissions_roleprivs.items()
            
        end = time.time()
        logger.debug('intesting 2')
        print(f"Time to complete: {round(end - start, 2)}")
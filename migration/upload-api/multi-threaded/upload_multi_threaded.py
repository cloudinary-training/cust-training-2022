"""
Invokes cloudinary APIs (via Cloudinary Python SDK) using ThreadPoolExecutor
- Limits number of concurrent API operations to 10 (sets max_workers on ThreadPoolExecutor)
- Receives results (or handles exception) from each API operation
- Uses "wrapper" function to trace number of concurrent threads (upload operations) in the application

Based on https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor
"""
from dotenv import load_dotenv
load_dotenv()

import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from cloudinary.uploader import upload
import json
import time

start = time.time()

# read list of urls from file
f = open("./migration/data-prep/urls.json", 'r')
urls_to_load = json.load(f)
f.close()

def cld_upload_wrapper(name, **kwargs):
    """
    While Cloudinary's 'upload' API can be invoked straight from executor,
    having this wrapper method also allows to provide information on 
    the number of active threads
    """
    print(f'START ({name}) 🧵: {threading.active_count()}')
    cld_api_resp = upload(**kwargs)
    print(f'DONE  ({name}) 🧵: {threading.active_count()}')
    return cld_api_resp

def get_upload_api_kwargs(upload_index):
    """
    This method prepares api parameters for the Cloudinary API call
    """
    url = urls_to_load[upload_index]
    print(url)
    return {
        'file'     : url,
        'public_id': f'concurrent_{upload_index:03}',
        'folder'   : 'threadpooltest'
    }

def main():
    url_count = len(urls_to_load)
    print(url_count)
    with ThreadPoolExecutor(max_workers=10) as executor:
        # Submitting api wrapper function and parameters with ThreadPoolExecutor
        future_to_index = {
            # Schedules the callable, fn, to be executed as fn(*args, **kwargs) 
            # and returns a Future object representing the execution of the callable.
            executor.submit(cld_upload_wrapper, f'upload#{i}', **get_upload_api_kwargs(i)): i 
            for i in range(url_count)
        }

        # Handling api responses as executor finishes processing each individual wrapper function
        for future in as_completed(future_to_index):
            index = future_to_index[future]
            try:
                data = future.result()
            except Exception as exc:
                print(f'Upload op#{index} generated an exception {exc}')
            else:
                secure_url = data['secure_url']
                print(f'Upload op#{index} > {secure_url}')

    print(f'🧵: {threading.active_count()}')

    end = time.time()
    print(f"Time to complete (seconds): {round(end - start, 3)}")

if __name__ == '__main__':
    main()
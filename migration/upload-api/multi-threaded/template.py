"""
Invokes cloudinary APIs (via Cloudinary Python SDK) using ThreadPoolExecutor
- Limits number of concurrent API operations to 10 (sets max_workers on ThreadPoolExecutor)
- Receives results (or handles exception) from each API operation
- Uses "wrapper" function to trace number of concurrent threads (upload operations) in the application

Based on https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor
"""
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from cloudinary.uploader import upload

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
    return {
        'file'     : 'https://picsum.photos/200',
        'public_id': f'concurrent_{upload_index:03}',
        'folder'   : 'threadpooltest'
    }

def main():
    with ThreadPoolExecutor(max_workers=10) as executor:
        # Submitting api wrapper function and parameters with ThreadPoolExecutor
        future_to_index = {
            executor.submit(cld_upload_wrapper, f'upload#{i}', **get_upload_api_kwargs(i)): i 
            for i in range(100)
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


if __name__ == '__main__':
    main()
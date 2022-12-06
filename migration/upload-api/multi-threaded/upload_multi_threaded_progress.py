from dotenv import load_dotenv
load_dotenv()
"""
Invokes cloudinary APIs (via Cloudinary Python SDK) using ThreadPoolExecutor
- Limits number of concurrent API operations to 10 (sets max_workers on ThreadPoolExecutor)
- Receives results (or handles exception) from each API operation
- Uses "wrapper" function to trace number of concurrent threads (upload operations) in the application

Based on https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor
"""
import json
import os
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

import cloudinary
from cloudinary.uploader import upload
from dotenv import load_dotenv
from tqdm import tqdm


def cld_upload_wrapper(name, **kwargs):
    """
    While Cloudinary's 'upload' API can be invoked straight from executor,
    having this wrapper method also allows to provide information on
    the number of active threads
    """
    cld_api_resp = upload(**kwargs)
    return cld_api_resp

def get_upload_api_kwargs(upload_index):
    """
    This method prepares api parameters for the Cloudinary API call
    """
    url = urls_to_load[upload_index]
    return {
        'file'     : url,
        'public_id': f'concurrent_{upload_index:03}',
        'folder'   : 'threadpooltest'
    }

def main():
    url_count = len(urls_to_load)
    with tqdm(total=url_count, leave=False) as pbar:
        with ThreadPoolExecutor(max_workers=10) as executor:
            # Submitting api wrapper function and parameters with ThreadPoolExecutor
            futures = {
                executor.submit(cld_upload_wrapper, f'upload#{i}', **get_upload_api_kwargs(i)): i
                for i in range(url_count)
            }

            # Handling api responses as executor finishes processing each individual wrapper function
            success = []
            failed = []
            for future in as_completed(futures):
                index = futures[future]
                try:
                    data = future.result()
                    pbar.update(1)
                    success.append(data)
                except Exception as exc:
                    print(f'Upload op#{index} generated an exception {exc}')
                    failed.append(future)
                else:
                    secure_url = data['secure_url']

    return success, failed


if __name__ == '__main__':
    load_dotenv()
    env = os.getenv("CLOUDINARY_URL")
    cloudinary.Config()

    # read list of urls from file
    with open("./migration/data-prep/urls.json", 'r') as f:
        urls_to_load = json.load(f)

    start = time.time()
    success, failed = main()
    end = time.time()
    success_rate = len(success) / len(urls_to_load)
    print(f"""
    Success         : {len(success)} ({success_rate:.3%})
    Failed          : {len(failed)} ({1-success_rate:.3%})
    Time (seconds)  : {round(end - start, 3)}
    """)

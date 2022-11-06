import warnings
warnings.filterwarnings("ignore")

import asyncio

from concurrent.futures import ThreadPoolExecutor

from dotenv import load_dotenv
load_dotenv()

from cloudinary.uploader import upload
import json
import time


def dump_response(response):
    for key in sorted(response.keys()):
        print("  %s: %s" % (key, response[key]))

def upload_files(url):
    print(url)
    response = upload(url,
        folder='migration-multithread',
        overwrite = True,
        invalidate = True,
        use_filename=True,
        categorization = 'aws_rek_tagging',
        unique_filename=False)
    dump_response(response)

async def get_data_asynchronous():
    # read list of urls from file
    f = open("./migration/data-prep/urls.json", 'r')
    urls_to_load = json.load(f)
    f.close()

    with ThreadPoolExecutor(max_workers=5) as executor:
        loop = asyncio.get_event_loop()
        tasks = [
            loop.run_in_executor(
                executor,
                upload_files(url) # Allows us to pass in multiple arguments to `fetch`
            )
            for url in urls_to_load
        ]

def main():
    start = time.time()

    loop = asyncio.get_event_loop()
    future = asyncio.ensure_future(get_data_asynchronous())
    loop.run_until_complete(future)

    end = time.time()
    print(f"Time to complete: {round(end - start, 3)}")
main()
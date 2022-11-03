import warnings
warnings.filterwarnings("ignore")

import asyncio

from concurrent.futures import ThreadPoolExecutor
from timeit import default_timer

from dotenv import load_dotenv
load_dotenv()

from cloudinary.uploader import upload


def dump_response(response):
    response_time = "{:5.2f}s".format(default_timer())
    print("Upload response: %s" % (response_time))
    for key in sorted(response.keys()):
        print("  %s: %s" % (key, response[key]))

def upload_files(url):
    response = upload(url)
    dump_response(response)

async def get_data_asynchronous():
    urls_to_upload = [
        "https://res.cloudinary.com/francistagbo/image/upload/sample.jpg",
        "https://res.cloudinary.com/francistagbo/image/upload/sample.jpg",
        "https://res.cloudinary.com/francistagbo/image/upload/sample.jpg",
    ]

    with ThreadPoolExecutor(max_workers=3) as executor:
        loop = asyncio.get_event_loop()
        tasks = [
            loop.run_in_executor(
                executor,
                upload_files(url) # Allows us to pass in multiple arguments to `fetch`
            )
            for url in urls_to_upload
        ]
        for response in await asyncio.gather(tasks):
            pass

def main():
    loop = asyncio.get_event_loop()
    future = asyncio.ensure_future(get_data_asynchronous())
    loop.run_until_complete(future)

main()
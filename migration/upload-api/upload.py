import json
import time


from dotenv import load_dotenv
load_dotenv()

#import cloudinary after load dotnev
import cloudinary
from cloudinary.uploader import upload


config = cloudinary.config(secure=True)
print(config.cloud_name)


def dump_response(response):
    print("Upload response:")
    for key in sorted(response.keys()):
        print("  %s: %s" % (key, response[key]))
    print('---')


def uploadSingle(asset):
    print(asset['url'],
          asset['migration_date'], asset['tshirt'])
    context = 'migration_date=%s|size=%s' % (asset['migration_date'],asset['tshirt'])
    print(context)
    response = upload(asset["url"], 
        folder='migration',
        overwrite = True,
        invalidate = True,
        use_filename=True,
        context=context,
        categorization = 'aws_rek_tagging',
        notification_url = 'https://webhook.site/ad0238a9-bf83-4791-b649-98c18fe6e51c',
        unique_filename=False)
    dump_response(response)

start = time.time()

f = open("./migration/data-prep/input.json", 'r')
data_list = json.load(f)
f.close()


for item in data_list:
    uploadSingle(item)


end = time.time()
print(f"Time to complete (seconds): {round(end - start, 3)}")

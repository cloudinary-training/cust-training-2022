# Add data that will be used as meta data in Cloudinary

import json
from datetime import date
today = date.today()

f = open("./migration/data-prep/save.json", 'r')
data_list = json.load(f) #data becomes a array
f.close()

def makeURL(path):
    return 'https://cloudinary-training.github.io/advanced-concepts/%s' % path

# create newlist of dictionary items

remote_assets = []
for asset in data_list:
    # print(asset)
    remote_assets.append(makeURL(asset['path']))
# print(data_list[0])
# print(remote_assets)


# reopen in write mode and add new data
f = open("./migration/data-prep/urls.json", 'w+')
f.write(json.dumps(remote_assets, sort_keys=True, indent=4, separators=(',', ': ')))
f.close()

# Add data that will be used as meta data in Cloudinary

import json
from datetime import date
today = date.today()

f = open("./migration/save.json", 'r')
data_list = json.load(f) #data becomes a array
f.close()

def makeURL(path):
    return 'https://cloudinary-training.github.io/advanced-concepts/%s' % path

# create newlist of dictionary items

remote_assets = []
for asset in data_list:
    # print(asset)
    asset_dict = {}
    asset_dict['url'] = makeURL(asset['path'])
    asset_dict['migration_date'] = today.strftime("%m/%d/%y")
    if asset['size'] < 100000:
        asset_dict['tshirt'] = 'small'
    elif asset['size'] < 1000000:
        asset_dict['tshirt'] = 'medium'
    else:
        asset_dict['tshirt'] = 'large'
    remote_assets.append(asset_dict.copy())
# print(data_list[0])
print(remote_assets)


# reopen in write mode and add new data
f = open("./migration/input.json", 'w+')
f.write(json.dumps(remote_assets, sort_keys=True, indent=4, separators=(',', ': ')))
f.close()

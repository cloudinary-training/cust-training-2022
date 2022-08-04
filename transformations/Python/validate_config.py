from dotenv import load_dotenv
load_dotenv()

import cloudinary

def validateConfig():
    print(cloudinary.config().cloud_name)

def main():
    validateConfig()
  
main()
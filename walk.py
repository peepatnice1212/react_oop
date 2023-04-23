import numpy as np
import pydicom
from PIL import Image
import os

mainpath = r'D:\งานมหาลัย\ปี 2 เทอม 1\OOP\โปรเจค\Project dcm'

# Covert Function
def convert(pathname, name, where):

    raw_string = r"{}".format(pathname)

    ds = pydicom.dcmread(raw_string)

    new_image = ds.pixel_array.astype(float)

    scaled_image = (np.maximum(new_image, 0) / new_image.max()) * 255.0

    scaled_image = np.uint8(scaled_image)
    final_image = Image.fromarray(scaled_image)

    namefile = r"{}{}.png".format(where, name)
    final_image.save(namefile)

# List of path
list = []
name = []
where = []

# Get dcm file path
for subdir, dirs, files in os.walk(mainpath):
    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".dcm"): 
            #print(filename[:-4])
            name.append(filename[:-4])
            where.append(subdir + os.sep)
            #print (filepath)
            list.append(filepath)

#Loop covert to png
for i, path in enumerate(list):
    convert(path, name[i], where[i])

#Get png file path
for subdir, dirs, files in os.walk(mainpath):
    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".png"):
            print (filepath)





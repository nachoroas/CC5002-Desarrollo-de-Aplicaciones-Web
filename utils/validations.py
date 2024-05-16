import re
import filetype
from database import db



def validate_type(type):
    return type in ["fruta", "verdura"]

def validate_product(product):
    productarray=[]
    productdb=db.get_fruits()    
    if len(product) >5 or len(product)<1:
        return False
    for i in productdb:
        productarray.append(i[0])
    for i in product:
        if i not in productarray:
            return False
    return True
    

def validate_email(value):
    return "@" in value

def validate_desc(conf_text):
    return True

def validate_comuna(comuna_id):
    comunasarray=[]
    comunas=db.getComunas()
    for i in comunas:
        comunasarray.append(i[0])
    for i in comuna_id:
        if i not in comunasarray:
            return False
    return True


def validate_name(name):
    return name and len(name) > 2 and len(name) < 80

def validate_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}
    
    if len(conf_img) > 3 or len(conf_img) < 1:
        return False
    
    for image in conf_img:
        # check if a file was submitted
        if image is None:
            return False
        # check if the browser submitted an empty file
        if image.filename == "":
            return False
        
        # check file extension
        ftype_guess = filetype.guess(image)
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            return False
        # check mimetype
        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            return False
    return True

def validate_phone(phone):
    if phone:
        return re.match(r"^\+?1?\d{9,15}$", phone)
    else:
        return True

def validate_register_product_data(type,product, description,photo, comuna_id, name, email, phone):
    return validate_type(type) and validate_product(product) and validate_desc(description) and validate_img(photo) and validate_comuna(comuna_id) and validate_name(name) and validate_email(email) and validate_phone(phone)

def validate_product_id(producto_id):
    return producto_id.isdigit() and int(producto_id) > 0


import re
import filetype

def validate_type(type):
    return type in ["fruta", "verdura"]

def validate_email(value):
    return "@" in value

def validate_desc(conf_text):
    return True

def validate_comuna(comuna_id):
    return comuna_id in range(10101,130606)


def validate_name(name):
    return name and len(name) > 2 and len(name) < 80

def validate_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    # check if a file was submitted
    if conf_img is None:
        return False

    # check if the browser submitted an empty file
    if conf_img.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(conf_img)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True

def validate_phone(phone):
    return re.match(r"^\+?1?\d{9,15}$", phone)

def validate_register_product_data(type, description,photo, comuna_id, name, email, phone):
    return validate_type(type) and validate_desc(description) and validate_img(photo) and validate_comuna(comuna_id) and validate_name(name) and validate_email(email) and validate_phone(phone)

def validate_product_id(producto_id):
    return producto_id.isdigit() and int(producto_id) > 0


from flask import Flask, request, render_template, redirect, url_for
from werkzeug.utils import secure_filename
from utils.validations import validate_register_product_data,validate_product_id
from database import db
import hashlib
import filetype
import os
import uuid

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)



app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000 # 16 MB 

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'File exceeds the maximum file size allowed', 413

# --- Routes ---
@app.route("/")
def index():    
    return render_template("index.html")

# -- Productos --

@app.route("/agregar-producto", methods=["GET", "POST"])
def agregar_producto():
    if request.method == "POST":
        type=request.form.get("type")
        description=request.form.get("description")
        photo=request.files.get("photo")
        comuna_id=request.form.get("comuna_id")
        name=request.form.get("name")
        email=request.form.get("email")
        phone=request.form.get("phone")
        error=""
        if validate_register_product_data(type, description,photo, comuna_id, name, email, phone):
            _filename_hash = hashlib.sha256(secure_filename(photo.filename).encode("utf-8")).hexdigest()
            _extension = filetype.guess(photo).extension
            img_filename = f"{_filename_hash}_{str(uuid.uuid4())}.{_extension}" 
            path =os.path.join(app.config["UPLOAD_FOLDER"], img_filename)
            photo.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
            status, msg = db.register_product(type, description,img_filename,path, comuna_id, name, email, phone)
            if status:
                return redirect(url_for("index"))
            error += msg
        else:
            error += "Uno de los campos no es valido." 
        render_template("productos/agregar-producto.html",error=error)
            
    return render_template("productos/agregar-producto.html")

@app.route("/informacion-producto", methods=["GET", "POST"])
def informacion_producto():
    producto_id = request.args.get('producto_id')
    producto=[]
    error=""
    if validate_product_id(producto_id):
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor = db.get_product_by_id(producto_id)
        type_vegetable_fruit=db.get_products_types(id)
        comuna_name=db.get_comuna_name(comuna_id)
        region_id=db.get_region_id(comuna_id)
        region_name=db.get_region_name(region_id)
        path,file_name=db.get_product_photo(id)
        img_filename = f"uploads/{file_name}"
        producto.append({
            "tipo":tipo,
            "product":type_vegetable_fruit,
            "descripcion":descripcion,
            "region":region_name,
            "comuna":comuna_name,
            "name":nombre_productor,
            "email":email_productor,
            "phone":celular_productor, 
            "path_image": url_for('static', filename=img_filename),
        })
        return render_template("productos/informacion-producto.html",producto=producto)
        
    else:
        error += "El id del producto no es valido."
        return render_template("productos/informacion-producto.html",error=error)

@app.route("/ver-productos", methods=["GET"])
def ver_productos():
    productos=[]
    for producto in db.get_products():
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor= producto
        type_vegetable_fruit=db.get_products_types(id)
        path,file_name=db.get_product_photo(id)
        img_filename = f"uploads/{file_name}"
        comuna_name=db.get_comuna_name(comuna_id)
        region_id=db.get_region_id(comuna_id)
        region_name=db.get_region_name(region_id)
        productos.append({
            "producto_id":id,
            "tipo":tipo,
            "product":type_vegetable_fruit,
            "region":region_name,
            "comuna":comuna_name,
            "path_image": url_for('static', filename=img_filename),
            
        })
    
    return render_template("productos/ver-productos.html",productos=productos)

# -- Pedidos --

@app.route("/agregar-pedido", methods=["GET", "POST"])
def agregar_pedido():

    return render_template("pedidos/agregar-pedido.html")

@app.route("/informacion-pedido", methods=["GET", "POST"])
def informacion_pedido():

    return render_template("pedidos/informacion-pedido.html")

@app.route("/ver-pedidos", methods=["GET", "POST"])
def ver_pedidos():

    return render_template("pedidos/ver-pedidos.html")



if __name__ == "__main__":
    app.run(debug=True)

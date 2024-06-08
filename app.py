from flask import Flask, request, render_template, redirect, url_for, jsonify
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from utils.validations import validate_product_data,validate_product_id,validate_pedido_data
from database import db
import hashlib
import filetype
import os
import math
import uuid


dir_actual = os.getcwd()
UPLOAD_FOLDER = os.path.join(dir_actual,'Tarea','static','uploads')

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

@app.route("/agregarProducto", methods=["GET", "POST"])
def agregarProducto():
    if request.method == "POST":
        type=request.form.get("tipo")
        product=request.form.getlist("productItem")  
        #print(product)      
        description=request.form.get("descripcion")
        photos=request.files.getlist("foto")
        comuna_id=request.form.getlist("comuna")
        name=request.form.get("nombre")
        email=request.form.get("email")
        phone=request.form.get("telefono")
        error=""
        if validate_product_data(type,product, description,photos, comuna_id, name, email, phone):
            status, msg= db.register_product(type,product, description,photos, comuna_id, name, email, phone)
            if status:
                return redirect(url_for("index"))
            error += msg
            
        else:
            error += "Uno de los campos no es valido." 
        return render_template("productos/agregarProducto.html",error=error)        
    if request.method == "GET":
        regiones={}
        rawRegions=db.get_regions()
        for region in rawRegions:
            region_id, region_name = region
            comunaraw=db.get_comuna_by_region_id(region_id)
            comunas = [comuna[0] for comuna in comunaraw]  
            regiones[region_name] = comunas
        #aca el diccionario quedo bien hecho, pero no se usarlo aunque probablemente sea util asi que lo dejo        
        return render_template("productos/agregarProducto.html", regiones=regiones)
    else:
        return render_template("productos/agregarProducto.html")
        

@app.route("/informacion-producto", methods=["GET", "POST"])
def informacion_producto():
    producto_id = request.args.get('producto_id')
    imgSize = request.args.get('img')
    imgSize = True if imgSize == "True" else False
    productoArray=[]
    error=""
    if producto_id is None:
        error += "El id del producto no es valido."
        return render_template("productos/informacion-producto.html",error=error)
    if validate_product_id(producto_id):
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor = db.get_product(producto_id)
        type_vegetable_fruit=db.get_products_types(id)
        frutasVerduras=[]
        for i in range(len(type_vegetable_fruit)):
            frutasVerduras.append(type_vegetable_fruit[i][0])
        comuna_name=db.get_comuna_name(comuna_id)
        comuna_name=comuna_name[0]
        region_id=db.get_region_id(comuna_id)
        region_name=db.get_region_name(region_id)
        region_name=region_name[0]
        files=db.get_product_photo(id)
        filesImgs=[]
        for i in range(len(files)):
            file_name=files[i][1]
            base, ext = os.path.splitext(file_name)
            if (not imgSize):
                new_filename = f"{base}_640x480{ext}"
            elif imgSize:
                new_filename = f"{base}_1280x1024{ext}"
            img_filename = f"static/uploads/{id}/{new_filename}"
            filesImgs.append(img_filename)
        productoArray.append({
            "id":id,
            "tipo":tipo,
            "product":frutasVerduras,
            "descripcion":descripcion,
            "region":region_name,
            "comuna":comuna_name,
            "name":nombre_productor,
            "email":email_productor,
            "phone":celular_productor, 
            "path_image": filesImgs,
            "imgSize":imgSize,
        })
        return render_template("productos/informacion-producto.html",producto=productoArray)
        
    else:
        error += "El id del producto no es valido."
        return render_template("productos/informacion-producto.html",error=error)

@app.route("/ver-productos", methods=["GET"])
def ver_productos():
    productos=[]
    current_page = request.args.get('page')
    current_page=1 if current_page is None else int(current_page)
    
    for producto in db.get_products():
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor= producto
        type_vegetable_fruit=db.get_products_types(id)
        frutasVerduras=[]
        for i in range(len(type_vegetable_fruit)):
            frutasVerduras.append(type_vegetable_fruit[i][0])
        #print(frutasVerduras)
        files=db.get_product_photo(id)
        filesImgs=[]
        for i in range(len(files)):
            file_name=files[i][1]
            base, ext = os.path.splitext(file_name)
            new_filename = f"{base}_120x120{ext}"
            img_filename = f"static/uploads/{producto[0]}/{new_filename}"
            filesImgs.append(img_filename)
        comuna_namedb=db.get_comuna_name(comuna_id)
        comuna_name=comuna_namedb[0]
        region_id=db.get_region_id(comuna_id)
        region_namedb=db.get_region_name(region_id)
        region_name=region_namedb[0]
        productos.append({
            "producto_id":id,
            "tipo":tipo,
            "product":frutasVerduras,
            "region":region_name,
            "comuna":comuna_name,
            "path_image": filesImgs
        })
        
    total_pages = math.ceil(len(productos)/5)
    productos = productos[(current_page-1)*5:current_page*5]    
    return render_template("productos/ver-productos.html",productos=productos, current_page=current_page, total_pages=total_pages)

# -- Pedidos --

@app.route("/agregarPedido", methods=["GET", "POST"])
def agregar_pedido():
    
    if request.method == "POST":
        type=request.form.get("tipo")
        product=request.form.getlist("productItem")  
        description=request.form.get("descripcion")
        comuna_id=request.form.getlist("comuna")
        name=request.form.get("nombre")
        email=request.form.get("email")
        phone=request.form.get("telefono")
        error=""
        if validate_pedido_data(type,product, description, comuna_id, name, email, phone):
            status, msg= db.register_pedido(type,product, description, comuna_id, name, email, phone)
            if status:
                return redirect(url_for("index"))
            error += msg
            
        else:
            error += "Uno de los campos no es valido." 
        return render_template("pedidos/agregarPedido.html",error=error)  
            
        
    return render_template("pedidos/agregarPedido.html")

@app.route("/informacion-pedido", methods=["GET", "POST"])
def informacion_pedido():
    producto_id = request.args.get('pedido_id')
    productoArray=[]
    error=""
    if producto_id is None:
        error += "El id del pedido no es valido."
        return render_template("pedidos/informacion-pedido.html",error=error)
    if validate_product_id(producto_id):
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor = db.get_pedido(producto_id)
        type_vegetable_fruit=db.get_pedidos_types(id)
        frutasVerduras=[]
        for i in range(len(type_vegetable_fruit)):
            frutasVerduras.append(type_vegetable_fruit[i][0])
        comuna_name=db.get_comuna_name(comuna_id)
        comuna_name=comuna_name[0]
        region_id=db.get_region_id(comuna_id)
        region_name=db.get_region_name(region_id)
        region_name=region_name[0]
        productoArray.append({
            "id":id,
            "tipo":tipo,
            "product":frutasVerduras,
            "descripcion":descripcion,
            "region":region_name,
            "comuna":comuna_name,
            "name":nombre_productor,
            "email":email_productor,
            "phone":celular_productor
        })
        return render_template("pedidos/informacion-pedido.html",pedido=productoArray)
        
    else:
        error += "El id del producto no es valido."
        return render_template("pedidos/informacion-pedido.html",error=error)

@app.route("/ver-pedidos", methods=["GET", "POST"])
def ver_pedidos():
    pedidos=[]
    current_page = request.args.get('page')
    current_page=1 if current_page is None else int(current_page)
    
    for pedido in db.get_pedidos():
        id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor= pedido
        type_vegetable_fruit=db.get_pedidos_types(id)
        #print(type_vegetable_fruit)
        frutasVerduras=[]
        for i in range(len(type_vegetable_fruit)):
            frutasVerduras.append(type_vegetable_fruit[i][0])
        #print(frutasVerduras)
        comuna_namedb=db.get_comuna_name(comuna_id)
        comuna_name=comuna_namedb[0]
        region_id=db.get_region_id(comuna_id)
        region_namedb=db.get_region_name(region_id)
        region_name=region_namedb[0]
        pedidos.append({
            "pedido_id":id,
            "tipo":tipo,
            "product":frutasVerduras,
            "region":region_name,
            "comuna":comuna_name,
            "name":nombre_productor,
        })
        
    total_pages = math.ceil(len(pedidos)/5)
    pedidos = pedidos[(current_page-1)*5:current_page*5]    
    return render_template("pedidos/ver-pedidos.html",pedidos=pedidos, current_page=current_page, total_pages=total_pages)

@app.route("/estadisticas", methods=["GET"])
def estadisticas():
    return render_template("estadisticas/estadisticas.html")

@app.route("/get-estadisticas", methods=["GET"])
@cross_origin(origin="localhost", supports_credentials=True)
def get_estadisticas():
    data1 = db.get_estadisticas_pedidos()
    data2 = db.get_estadisticas_productos()
    TotalData=(data2,data1)
    return jsonify(TotalData)


if __name__ == "__main__":
    app.run(debug=True)

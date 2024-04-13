const DicRegiones_Comunas = {
    "Región de Arica y Parinacota" : ["Arica", "Camarones", "Putre", "General Lagos"],
    "Región de Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Región de Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Región deAtacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "Región de Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "Región de Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
    "Región del Libertador Gral. Bernardo O’Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
    "Región del Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Región del Ñuble": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
    "Región del Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
    "Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue","Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Región de Aysén del General Carlos Ibáñez del Campo": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "Región de Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"], 
}
const DicTipos ={
    "Fruta": [ "Arándano","Frambuesa","Frutilla","Grosella","Mora","Limón","Mandarina","Naranja","Pomelo","Melón","Sandía","Palta","Chirimoya","Coco","Dátil","Kiwi","Mango","Papaya","Piña","Plátano","Damasco","Cereza","Ciruela","Higo","Kaki","Manzana","Durazno","Nectarin","Níspero","Pera","Uva","Almendra","Avellana","Maní","Castaña","Nuez","Pistacho"],
    "Verdura": ["Brócoli","Repollo","Coliflor","Rábano","Alcachofa","Lechuga","Zapallo","Pepino","Haba","Maíz","Champiñón","Acelga", "Apio","Espinaca","Perejil","Ajo","Cebolla","Espárrago","Puerro","Acelga","Espinaca","Remolacha","Berenjena","Papa","Pimiento","Tomate","Zanahoria"]
}

const bolsaProductos = [];

function productos() {
  const tipo=document.getElementById("tipo").value;
  const producto= document.getElementById("producto");
  
  productoSelect=DicTipos[tipo];
  const htmloptions = productoSelect.map(item => `<option value=${item}>${item}</option>`).join('');
  producto.innerHTML= htmloptions;
  
}

function comunas(){
    const region= document.getElementById("region").value;
    const comunaElement = document.getElementById("comuna");

    comunaSeleccionada= DicRegiones_Comunas[region];
    const htmloptions = comunaSeleccionada.map(item => `<option value=${item}>${item}</option>`).join('');
    comunaElement.innerHTML = htmloptions;

}

function ProductList(){
  const producto = document.getElementById("producto").value;
  const list= document.getElementById("productList");
  if (bolsaProductos.includes(producto)){
    const existentProduct = document.getElementById(producto);
    existentProduct.remove();
    let index=bolsaProductos.indexOf(producto);
    bolsaProductos.splice(index,1);
  }
  else{
    if (bolsaProductos.length>4){
      alert("Maximo de productos alcanzado")
    }
    else{
    bolsaProductos.push(producto)
    const newList = document.createElement("li");
    newList.id=producto;
    newList.innerText= producto;
    list.appendChild(newList);
  }
  }
}

function validateProduct(product) {
    
    if (product=="Verdura" || product=="Fruta"){ 
        return true    
    }
    else{
        return false
    }
        
}
function validateProductNumber(){
  if(bolsaProductos.length>0 && bolsaProductos.length<6){
    return true
  }
  else{
    return false
  }
}

function validatePhoto(photo){
  if (photo.length>0 && photo.length<=3){
    return true
  }
  else{
    return false
  }
}

function validateRegion(region) {
    if (DicRegiones_Comunas.hasOwnProperty(region)){
      
        return true
    }
    else{
        return false
    }
    
}
function validateComuna(region, comuna) {
  if (DicRegiones_Comunas.hasOwnProperty(region)) {
      const comunasRegion = DicRegiones_Comunas[region];
      if (comunasRegion.includes(comuna)) {
          return true;
      } else {
          return false;
      }
  } else {
      return false; 
  }
}
function validateName(name){
    if (name && name.length>3 && name.length<80){
        return true
    }
    else false
}
function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

function validatePhone(phone){
    const regexTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return regexTelefono.test(phone);
}

function handleFormSubmit(){
    console.log("Validating form...");
    const productType = document.getElementById("tipo");
    const productNumer= document.getElementById("producto");
    const photo= document.getElementById("foto");
    const region = document.getElementById("region");
    const comuna = document.getElementById("comuna");
    const selectedOption = comuna.options[comuna.selectedIndex];
    const comunaValue = selectedOption.text;
    const name = document.getElementById("nombre");
    const email = document.getElementById("email");
    const phone = document.getElementById("telefono");

    let isValid = true;
    let errorMessage = "";
    if (!validateProduct(productType.value)){
        isValid = false;       
        errorMessage += "Por favor ingresa un Tipo de fruta valido.\n";
        productType.style.borderColor = "red";
      } else {
        productType.style.borderColor = "";
      }
    if (!validateRegion(region.value)) {
        isValid = false;
        errorMessage += "Por favor ingresa una region valida.\n";
        region.style.borderColor = "red";
      } else {
        region.style.borderColor = "";
        if (!validateComuna(region.value,comunaValue)) {
            isValid = false;
            errorMessage += "Por favor ingresa una comuna valida.\n";
            comuna.style.borderColor = "red";
          } else {
            comuna.style.borderColor = "";
          }
      }
    if (!validatePhoto(photo.files)){
        isValid = false;
        errorMessage += "Por favor ingresa una cantidad de fotos valida.\n";
        photo.style.borderColor = "red";
    }
    else{
        photo.style.borderColor = "";
    }
    if (!validateName(name.value)) {
        isValid = false;
        errorMessage += "Por favor ingresa un nombre valido.\n";
        name.style.borderColor = "red";
      } else {
        name.style.borderColor = "";
      }
    if (!validateEmail(email.value)) {
        isValid = false;
        errorMessage += "Por favor ingresa un correo electrónico válido.\n";
        email.style.borderColor = "red";
      } else {
        email.style.borderColor = "";
      }
    if(phone.value){
      if (!validatePhone(phone.value)) {
          isValid = false;
          errorMessage += "Por favor ingresa un telefono valido.\n";
          phone.style.borderColor = "red";
        } else {
          phone.style.borderColor = "";
        }
      }
    if (!validateProductNumber()){
        isValid=false;
        errorMessage+="Por favor seleccione una cantidad adecuada de productos"
        productNumer.style.borderColor="red"
    }else{
          productNumer.style.borderColor="";
        }

    if (!isValid) {
        alert(errorMessage);
    }
    else{
        const modal = document.getElementById("confirmacion");
        modal.style.display = "block";
        

    }
}
function confirmacion(){
    alert("“Hemos recibido el registro de producto. Muchas gracias.");
    const modal = document.getElementById("confirmacion");
    //modal.style.display = "none";
    const backHome=document.getElementById("BackHome");
    backHome.style.display="block"
}
function cancelar(){
    const modal = document.getElementById("confirmacion");
    modal.style.display = "none";
}
function inicio(){
  window.location.href = 'index.html'

}


const tipo = document.getElementById("tipo");
tipo.addEventListener("change",productos)

const  region = document.getElementById("region");
region.addEventListener("change", comunas);

const producto = document.getElementById("producto");
producto.addEventListener("change",ProductList)

const submitButton = document.getElementById("envio");
submitButton.addEventListener("click", handleFormSubmit);

const Confirmar = document.getElementById("confirmar");
Confirmar.addEventListener("click",confirmacion);

const Cancelar = document.getElementById("cancelar");
Cancelar.addEventListener("click", cancelar);

const BackHome = document.getElementById("BackHome");
BackHome.addEventListener("click",inicio);


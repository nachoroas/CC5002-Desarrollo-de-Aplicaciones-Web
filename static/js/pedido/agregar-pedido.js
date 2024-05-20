const DicRegiones_Comunas = {
  "Región Arica y Parinacota" : ["Arica", "Camarones", "Putre", "Gral. Lagos"],
  "Región de Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Región de Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro Atacama", "Tocopilla", "Maria Elena"],
  "Región de Atacama": ["Copiapo", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Región de Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Los Vilos", "Salamanca", "Ovalle", "Combarbala", "Monte Patria", "Punitaqui", "Rio Hurtado", "Mincha"],
  "Región de Valparaíso": ["Pencahue", "Valparaiso", "Casablanca", "Concon", "Juan Fernandez", "Puchuncavi", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "La Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llay Llay", "Putaendo", "Santa Maria", "Quilpue", "Limache", "Olmue", "Villa Alemana"],
  "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchali", "El Bosque", "Estacion Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barrenechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramon", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacavi", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  "Región del Libertador Bernardo Ohiggins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machali", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta Tilcoco", "Rengo", "Requinoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchigue", "Navidad", "Paredones", "San Fernando", "Chepica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Región del Maule": ["Pencahue", "Talca", "Constitucion", "Curepto", "Empedrado", "Maule", "Pelarco", "Rio Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curico", "Hualañe", "Licanten", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquen", "Linares", "Colbun", "Longavi", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Región del Ñuble": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ranquil", "Trehuaco", "Bulnes", "Chillan Viejo", "Chillan", "El Carmen", "Pemuco", "Pinto", "Quillon", "San Ignacio", "Yungay", "Coihueco", "Ñiquen", "San Carlos", "San Fabian", "San Nicolas"],
  "Región del Biobío": ["Concepcion", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tome", "Hualpen", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Alamos", "Tirua", "Los Angeles", "Antuco", "Cabrero", "Laja", "Mulchen", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Barbara", "Tucapel", "Yumbel", "Alto Bio Bio"],
  "Región de La Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquen", "Pucon", "Puerto Saavedra", "Teodoro Schmidt", "Tolten", "Vilcun", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautin", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Puren", "Renaico", "Traiguen", "Victoria"],
  "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Mafil", "Mariquina", "Paillaco", "Panguipulli", "La Union", "Futrono", "Lago Ranco", "Rio Bueno"],
  "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamo", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullin", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Velez", "Dalcahue","Puqueldon", "Queilen", "Quellon", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Rio Negro", "San Juan", "San Pablo", "Chaiten", "Futaleufu", "Hualaihue", "Palena"],
  "Región Aisén del General Carlos Ibáñez del Campo": ["Coyhaique", "Lago Verde", "Aysen", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Rio Ibañez"],
  "Región de Magallanes y la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Rio Verde", "San Gregorio", "Antartica", "Porvenir", "Primavera", "Timaukel", "Puerto Natales", "Torres del Paine"], 
};
const DicTipos ={
    "fruta": [ "Arándano","Frambuesa","Frutilla","Grosella","Mora","Limón","Mandarina","Naranja","Pomelo","Melón","Sandía","Palta","Chirimoya","Coco","Dátil","Kiwi","Mango","Papaya","Piña","Plátano","Damasco","Cereza","Ciruela","Higo","Kaki","Manzana","Durazno","Nectarin","Níspero","Pera","Uva","Almendra","Avellana","Maní","Castaña","Nuez","Pistacho"],
    "verdura": ["Brócoli","Repollo","Coliflor","Rábano","Alcachofa","Lechuga","Zapallo","Pepino","Haba","Maíz","Champiñón","Acelga", "Apio","Espinaca","Perejil","Ajo","Cebolla","Espárrago","Puerro","Acelga","Espinaca","Remolacha","Berenjena","Papa","Pimiento","Tomate","Zanahoria"]
}

const bolsaProductos = [];

function productos() {
    const tipo=document.getElementById("tipo").value;
    const producto= document.getElementById("producto");
    
    productoSelect=DicTipos[tipo];
    const htmloptions = productoSelect.map(item => `<option value="${item}">${item}</option>`).join('');
    producto.innerHTML= htmloptions;
    
  }
  function comunas(){
    const region= document.getElementById("region").value;
    const comunaElement = document.getElementById("comuna");

    comunaSeleccionada= DicRegiones_Comunas[region];
    const htmloptions = comunaSeleccionada.map(item => `<option value="${item}">${item}</option>`).join('');
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
      bolsaProductos.push(producto);
      const newList = document.createElement("li");
      newList.id = producto;
      
      // Creamos un elemento <span> para mostrar el texto del producto dentro del <li>
      const span = document.createElement("span");
      span.innerText = producto;
      newList.appendChild(span);
      
      // Creamos el elemento <input> oculto y lo agregamos al <li>
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "productItem";
      input.value = producto;
      newList.appendChild(input);
      
      // Agregamos el <li> a la lista
      list.appendChild(newList);
  }
  }
}

  function validateProduct(product) {
    
    if (product=="verdura" || product=="fruta"){ 
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
  function validateRegion(region) {
    if (DicRegiones_Comunas.hasOwnProperty(region)){
        return true
    }
    else{
        return false
    }
    
}
function validateComuna(region,comuna) {
    if (DicRegiones_Comunas[region].includes(comuna)){
        return true
    }
    else{
        return false
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
    if (!validatePhone(phone.value)) {
        isValid = false;
        errorMessage += "Por favor ingresa un telefono valido.\n";
        phone.style.borderColor = "red";
      } else {
        phone.style.borderColor = "";
      }
    if (!validateProductNumber()){
        isValid=false;
        errorMessage+="Por favor seleccione una cantidad adecuada de productos"
        productNumer.style.borderColor="red"
    }
        else{
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
    alert("“Hemos recibido su pedido. Muchas gracias.");
    const modal = document.getElementById("confirmacion");
   // modal.style.display = "none";
    const backHome=document.getElementById("BackHome");
    let form = document.getElementById("agregar-pedido-form");
    form.submit()
    
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


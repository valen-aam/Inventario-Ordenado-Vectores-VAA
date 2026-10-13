class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = Number(codigo);
        this.nombre = nombre;
        this.cantidad = Number(cantidad);
        this.costo = Number(costo);
    }

    infoHtml(){
      return "<p>(" + this.codigo + ", " + 
             "Nombre: " + this.nombre + ", " + 
             "Cantidad: " + this.cantidad + ", " + 
             "Costo: " + this.costo + ")</p>";
   }
}

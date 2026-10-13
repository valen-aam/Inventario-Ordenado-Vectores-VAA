
class Inventario{
    constructor(){
        this.datos = [];
    }

    buscarPosicion(codigo){
        let inicio = 0;
        let fin = this.datos.length - 1;

        while (inicio <= fin){
            let medio = Math.floor((inicio + fin) / 2);

            if (this.datos[medio].codigo === Number(codigo)){
                return medio;
            }

            if (Number(codigo) < this.datos[medio].codigo){
                fin = medio - 1;
            } else {
                inicio = medio + 1;
            }
        }

        return -1;
    }

    buscarLugar(codigo){
        let inicio = 0;
        let fin = this.datos.length;

        while (inicio < fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (this.datos[medio].codigo < Number(codigo)){
                inicio = medio + 1;
            } else {
                fin = medio;
            }
        }

        return inicio;
    }

    insertar(posicion, nuevo){
        if (posicion === this.datos.length){
            this.datos.push(nuevo);
        } else {
            this.datos.push(this.datos[this.datos.length - 1]);

            for (let i = this.datos.length - 2; i > posicion; i--) {
                this.datos[i] = this.datos[i - 1];
            }

            this.datos[posicion] = nuevo;
        }
    }

    agregar(nuevo) {
        if (this.buscarPosicion(nuevo.codigo) !== -1) {
            return false;
        }

        let posicion = this.buscarLugar(nuevo.codigo);
        this.insertar(posicion, nuevo);

        return true;
    }

    buscar(codigo){
        let posicion = this.buscarPosicion(codigo);

        if (posicion === -1) {
            return null;
        }

        return this.datos[posicion];
    }

    eliminar(codigo) {
        let posicion = this.buscarPosicion(codigo);

        if (posicion === -1) {
            return null;
        }

        let eliminado = this.datos[posicion];

        for (let i = posicion; i < this.datos.length - 1; i++) {
            this.datos[i] = this.datos[i + 1];
        }

        this.datos.pop();

        return eliminado;
    }

    recuperarListado() {
        let texto = "";

        for (let i = 0; i < this.datos.length; i++) {
            texto +=
                "Codigo: " + this.datos[i].codigo +
                ", Nombre: " + this.datos[i].nombre +
                ", Cantidad: " + this.datos[i].cantidad +
                ", Costo: $" + this.datos[i].costo + "\n";
        }

        if (this.datos.length === 0) {
            return "El inventario esta vacio.";
        }

        return texto;
    }

    extraerPrimero() {
        if (this.datos.length === 0) {
            return null;
        }

        let primero = this.datos[0];

        for (let i = 0; i < this.datos.length - 1; i++) {
            this.datos[i] = this.datos[i + 1];
        }

        this.datos.pop();

        return primero;
    }

    extraerUltimo() {
        if (this.datos.length === 0) {
            return null;
        }

        return this.datos.pop();
    }

    listar() {
        if (this.datos.length === 0) {
            return "<p>El inventario esta vacio.</p>";
        }

        let html = "<h3>Inventario ordenado por codigo</h3>";

        for (let i = 0; i < this.datos.length; i++) {
            html += this.datos[i].infoHtml();
        }

        return html;
    }

    listarInverso() {
        if (this.datos.length === 0) {
            return "<p>El inventario esta vacio.</p>";
        }

        let html = "<h3>Inventario en orden inverso</h3>";

        for (let i = this.datos.length - 1; i >= 0; i--) {
            html += this.datos[i].infoHtml();
        }

        return html;
    }
}
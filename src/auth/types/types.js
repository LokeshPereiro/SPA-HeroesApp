// Definimos los types separados de la accion porque es más seguro tenerlos fuera de la función para evitar que se modifique erroneamente, es decir, posibles espacios, cambios de letras, etc.. Todo eso haría que mi reduicer deje de dispatchar las acciones
export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

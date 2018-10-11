//ENVIRONMENTS
export const API_URL_DEV = '//localhost:3000/';
export const API_URL_PROD = 'http://...';
export const API_URL = API_URL_DEV;

//ENDPOINTS
export const API = {
   LOGIN: `${API_URL}login`,
   LOGOUT: ``,
   USER_ALL: `${API_URL}users`,
   USER_GET: `${API_URL}/`,
   USER_CREATE: `${API_URL}users/create`,
   USER_UPDATE: `${API_URL}users/update/`,
   USER_DELETE: `${API_URL}users/delete/`,
   CALENDAR_ALL: `${API_URL}calendars`,
   CALENDAR_DELETE: `${API_URL}calendars/delete/`,
   SUBJECT_ALL: `${API_URL}subjects`,
   UPLOAD_IMAGE: `${API_URL}image/`
};

//ROLES
export const ROLES = [
   { id_role: 1, name: 'Administrador', url: 'admin' },
   { id_role: 2, name: 'Profesor', url: 'teacher' },
   { id_role: 3, name: 'Estudiante', url: 'student' },
];

//RECURSOS
export const IMAGE_SERVER = '';

//ERRORES DE FORMULARIO
export const ERROR_FORMS = {
   TOKEN_INVALID: 'El token de sesión es inválido.',
   SERVER_ERROR: 'Tenemos algunos problemas con nuestros servidores en este momento.'
}

export const PAGE_TITLES = {
   '/': { title: 'Inicio' },
   'admin': { title: 'Inicio' },
   'teacher': { title: 'Inicio' },
   'student': { title: 'Inicio' },
   'profile': { title: 'Perfil de Usuario' },
   'admin.(user)': { title: 'Usuarios' },
   'admin.(subject)': { title: 'Asignaturas' },
   'admin.(calendar)': { title: 'Calendario' }
}

//MENSAJES TOAST
export const TOAST_MESSAGES = {
   SUCCESS: 'Acción realizada correctamente'
}


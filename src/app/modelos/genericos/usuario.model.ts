export class Usuario {
    estadoEmpleadoActivo: boolean;
    superiorUsuarioAD: string;
    superiorUsuario: string;
    superiorCargo: string;
    superiorNombre: string;
    superiorSecuencial: number;
    sucursalDepartamento: string;
    sucursalCiudad: string;
    sucursalDireccion: string;
    sucursalNombre: string;
    sucursalCodigo: number;
    sucursalIdDepartamento: string;
    empleadoCiudadResidencia: string;
    empleadoDireccion: string;
    empleadoDocumentoCompleto: string;
    empleadoDocumentoExtension: string;
    empleadoDocuentoNro: string;
    empleadoDocumentoTipo: string;
    empleadoNombreCompleto: string;
    empleadoApCasada: string;
    empleadoApMaterno: string;
    empleadoApPaterno: string;
    empleadoNombreAlt: string;
    empleadoNombreSeg: string;
    empleadoNombrePrim: string;
    empleadoUsuarioAD: number;
    empleadoUsuario: string;
    empleadoCargo: string;
    empleadoSecuencial: number;
    contratoSecuencial: number;
    roles: Rol[];
  }
  
  export class Rol {
    rolId: number;
    rolDescripcion: string;
    rolSistemas: string;
  }
  
({
    // Notifications
    SAFE_GRAPHICS_MODE: "Modo de gráficos seguros",
    AUTH_FOR_AUTO_START: "Tiene máquinas virtuales que requieren autenticación para poder arrancar automáticamente. Presione CTRL + ALT + RETROCESO para habilitar la autenticación segura.",
    AUTH_START: "Presione CTRL + ALT + RETROCESO para habilitar la autenticación segura.",
    CTRL_SWITCH: "Para volver a esta pantalla, use:<div class='ctrlText'><span class='ctrlButton'>CTRL</span> + <span class='ctrlButton'>0</span></div>",
    SEVERAL_VMS: "Si se ejecutan varias máquinas virtuales sin tener instaladas las Herramientas de OpenXT puede haber problemas de bajo rendimiento del sistema. Si es posible, hay que instalar las Herramientas de OpenXT.",
    // Alerts
    LOW_SPACE_WARNING: "El espacio en disco se está agotando: quedan {0}% libres.",
    LOW_SPACE_TOOLTIP: "<strong>El espacio en disco se está agotando</strong><br/><br/>Quedan {0}% libres.",
    // Errors
    AJAX_FAILED: "Fallo de solicitud AJAX\r\nid: {0}; método: {1}",
    UNEXPECTED_RESULT: "Resultado inesperado de signalRegister para la interfaz ",
    SIGNAL_ERROR: "Error al recibir señales; cola: {0}",
    UNEXPECTED_RCV_RESULT: "Resultado inesperado de receiveSignals",
    SERVICE_NOT_RUNNING: "El servicio {0} no se está ejecutando.",
    XT_BED_NOT_RUNNING_ACTION: "Esta acción no pudo completarse porque el demonio de Synchronizer no se está ejecutando.",
    XT_VERSION_MISMATCH_INFO: "No se puede conectar con Synchronizer.  El servidor '{0}' no es compatible con un cliente '{1}'.",
    // XenConstants.ToolstackCodes
    NOT_ENOUGH_FREE_MEMORY: "No había suficiente memoria libre para la solicitud",
    VM_BAD_STATE: "La máquina virtual se encuentra en un estado inesperado",
    VM_UNEXPECTED_SHUTDOWN_REASON: "El motivo del apagado no coincidió con ninguno de los esperados",
    VM_NOT_SHUTDOWN: "La máquina virtual no se apagó",
    VM_ALREADY_CREATED: "La máquina virtual ya se ha creado",
    VT_MISSING: "Para usar una máquina virtual la virtualización del hardware debe estar habilitada. Compruebe sus parámetros de BIOS.",
    VM_TAP_MOUNT_FAILURE: "La máquina virtual no se inició porque no estaba en estado Listo.<br/>Esto puede deberse a que haya otro proceso actualizándola. Vuelva a intentarlo dentro de unos minutos.",
    HDX_AUTOSTART_MULTIPLE: "HDX y el inicio automático no pueden activarse simultáneamente en más de una VM.",
    VM_HIBERNATE_FAILED: "La máquina virtual no pudo hibernarse",
    VM_EDIT_DISABLED: "La modificación de las propiedades está inhabilitada por la directiva de esta VM",
    NO_SUCH_DEVICE: "Ese dispositivo no existe",
    VM_CANNOT_DELETE_RUNNING: "La VM no puede eliminarse mientras está ejecutándose",
    VM_COUNT_HIGH: "Hay demasiadas máquinas virtuales",
    DISK_NOT_EXIST: "Ese disco no existe",
    INCORRECT_DISK_TYPE: "Tipo de disco incorrecto",
    INCORRECT_DEVICE_TYPE: "Tipo de dispositivo incorrecto",
    HDX_CHANGE_WHILE_RUNNING: "No se puede activar o desactivar HDX mientras la VM se está ejecutando",
    HDX_ENABLE_NO_TOOLS: "No se puede activar HDX si no están instaladas las Herramientas de OpenXT",
    HDX_NO_VTD: "No se puede iniciar la VM con HDX porque VT-d no está habilitado",
    DISK_DEVICE_EXISTS: "No se pudo agregar el disco especificado. El dispositivo ya existe",
    TOOLS_REQUIRED: "Para realizar esta operación es necesario que las Herramientas de OpenXT estén instaladas en la VM",
    PROPERTY_READ_ONLY: "Propiedad de solo lectura",
    PROPERTY_WRITE_ONLY: "Propiedad de solo escritura",
    NO_DIAGNOSTICS: "Actualmente no se está recopilando información de diagnóstico",
    INCORRECT_DISK_HASH: "El hash del disco no coincide",
    TOO_MANY_HDX: "No se puede iniciar la VM. Hay demasiadas VM con HDX ejecutándose",
    VM_PASSTHRU_RUNNING: "No se puede iniciar la VM. Ya hay otra VM con paso de credenciales de AMT ejecutándose",
    POLICY_SUPPRESSED_ACTION: "Esta acción ha sido suprimida por los parámetros de la directiva activa",
    VM_HIBERNATE_CHANGE: "No se puede cambiar esta propiedad mientras la VM esté en hibernación",
    NIC_NOT_FOUND: "Esa interfaz de red no existe",
    IO_ERROR: "Error de IO",
    VM_RESUME_FAILED: "No se pudo sacar la VM del estado suspendido",
    OPERATION_SUPPRESSED_ACTION: "No se pudo completar la acción solicitada porque hay otra operación realizándose en segundo plano",
    VM_NO_RPC_AGENT: "La VM no está configurada para usar el agente rpc",
    VM_SLEEP_TIMEOUT: "Se excedió el tiempo de espera para suspender la VM",
    VM_HIBERNATE_TIMEOUT: "Se excedió el tiempo de espera para hibernar la VM",
    VM_SHUTDOWN_TIMEOUT: "Se excedió el tiempo de espera para apagar la VM",
    DEVICE_ATTACHED_ELSEWHERE: "El dispositivo se está transfiriendo a otra VM",
    ADAPTER_NOT_SECONDARY: "La tarjeta gráfica no puede transferirse como adaptador secundario",
    NETWORK_NOT_RUNNNING: "El dominio backend de red no se está ejecutando",
    OEM_ACPI_RUNNING: "No se puede iniciar la VM. Ya hay otra VM con funciones oem-acpi ejecutándose",
    UNKNOWN_GPU: "GPU desconocida",
    VM_TXT_SLEEP_DISABLED: "El modo suspendido del host está inhabilitado durante el inicio medido (Measured Launch) de TXT",
    UNSUPPORTED_LANGUAGE: "Idioma no respaldado",
    RULE_PARSE_ERROR: "Error de análisis de reglas",
    // XenConstants.UpdateCodes
    UPDATE_INTERNAL_ERROR: "Error interno",
    UPDATE_DOWNLOAD_FAILED: "Error de descarga",
    UPDATE_DOWNLOAD_CANCELLED: "Descarga cancelada",
    UPDATE_MISSING_METADATA: "Faltan metadatos",
    UPDATE_MALFORMED_METADATA: "Los metadatos no tenían el formato correcto",
    UPDATE_UPDATE_NOT_APPLICABLE: "Actualización no aplicable",
    UPDATE_ALREADY_RUNNING: "La actualización ya se está ejecutando",
    UPDATE_VM_RUNNING: "La actualización no puede aplicarse mientras se están ejecutando VM invitadas.\nApague las VM que estén ejecutándose y vuelva a intentarlo.",
    UPDATE_CORRUPT_FILE: "Se encontró un archivo dañado",
    UPDATE_UP_TO_DATE: "Ya está actualizado",
    UPDATE_FILE_NOT_FOUND: "No se encontró el repositorio de actualizaciones; verifique la dirección URL",
    UPDATE_CANNOT_RESOLVE_HOST: "No se puede resolver el host; verifique la dirección URL",
    UPDATE_CANNOT_CONNECT_HOST: "No se puede conectar con el host; verifique la dirección URL",
    UPDATE_SIGNATURE_FAILED: "Falló la verificación de la firma de la actualización",
    UPDATE_POLICY_DISABLED: "Las actualizaciones se han inhabilitado por directiva",
    // XenClient.Resource.RegisterStatus
    NETWORK_DISCONNECTED_2: "Sin conexión de red",
    SERVER_UNREACHABLE: "No se puede conectar con el servidor: verifique la dirección URL",
    CERT_CA_MISSING: "OpenXT no pudo registrar este dispositivo. Verifique la configuración de Synchronizer y compruebe si OpenXT está instalado correctamente: ",
    CERT_VERIFY_FAILED: "No se puede autenticar al servidor:",
    CERT_GENERIC: "Error genérico",
    CERT_TRUST_ROOT_CERT_FAILED: "Error de confianza en el certificado raíz",
    CERT_AUTH_CODE_MISMATCH: "El código de autenticación no coincide con el generado a partir del certificado",
    CERT_GET_CHAIN_FAILED: "No se pudo obtener la cadena de certificados del servidor",
    HOSTNAME_INVALID: "Se pasó un nombre de host no válido para el registro",
    CERT_NO_CN: "El certificado del servidor no contiene un nombre común",
    CERT_HOSTNAME_CN_MISMATCH: "El nombre común en el certificado no coincide con el nombre de host transferido para el registro: el nombre común en el certificado es {0}"
})
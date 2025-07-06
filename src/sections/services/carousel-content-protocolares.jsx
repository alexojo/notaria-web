

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

// ----------------------------------------

export function RequisitosGenerales() {
    return (

        <Stack spacing={1}>
            <Typography variant="body1">
                <strong>1. </strong>Minuta suscrita por todos los contratantes y autorizada por Abogado Colegiado. Ello excepto en los siguientes casos:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Otorgamiento, aceptación, sustitución, revocación y renuncia del mandato.',
                    'Renuncia de nacionalidad.',
                    'Nombramiento de tutor y curador en los casos que puede hacerse por escritura pública.',
                    'Reconocimiento de hijos.',
                    'Adopción de mayores de edad.',
                    'Autorización para el matrimonio de menores de edad otorgada por quienes ejercen la patria potestad.',
                    'Aceptación expresa o renuncia de herencia.',
                    'Declaración jurada de bienes y rentas.',
                    'Declaración de voluntad de constitución de pequeña o microempresa.',
                    'Arrendamiento (Ley 30933).',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText
                            primary={<Typography variant="body1">{item}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1">
                <strong>2. </strong>Documento Nacional de Identidad (Original y Copia Simple) de los contratantes. Debe contener la constancia de última votación o dispensa de sufragio (pago de la multa respectiva). Si desea mayor información sobre el DNI, hacer clic en el siguiente vínculo: <br />
                <Link
                    href="http://www.reniec.gob.pe"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'info.dark' }}
                >
                    http://www.reniec.gob.pe
                </Link>
            </Typography>

            <Typography variant="body1">
                <strong>3. </strong>En el caso de Extranjeros, presentarán Carnet de Extranjería vigente (Original y Copia) o Pasaporte (Original y Copia) con visación. Más información en: <br />
                <Link
                    href="http://www.migraciones.gob.pe"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'info.dark' }}
                >
                    http://www.migraciones.gob.pe
                </Link>
            </Typography>

            <Typography variant="body1">
                <strong>4. </strong> En caso que alguno de los contratantes actúe a través de representantes (apoderado), acompañar Certificado de Vigencia de Poder expedido por la SUNARP.
            </Typography>

            <Typography variant="body1">
                <strong>5. </strong> En caso de representación de una persona jurídica, acompañar Certificado de Vigencia de Poder expedido por la SUNARP.
            </Typography>

            <Typography variant="body1">
                <strong>6. </strong> Si en la Minuta se transcriben acuerdos adoptados por una Persona Jurídica, acompañar los Libros de Actas donde conste el acuerdo.
            </Typography>

            <Typography variant="body1">
                <strong>7. </strong> Si se solicita constancia o fe de entrega notarial de un cheque, acompañar copia del cheque a ser entregado.
            </Typography>

            <Typography variant="body1">
                <strong>8. </strong> En caso de entrega de dinero, debe acreditarse el medio de pago del sistema financiero. Se debe bancarizar el 100% del dinero usado.
            </Typography>
        </Stack>
    );
}

export function RequisitosEspecialesCompraVenta() {
    return (
        <Stack spacing={1}>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta autorizada por Abogado y suscrita por los Vendedores y Compradores.',
                    'Copia de los Documentos de Identidad de los Contratantes.',
                    'Copia literal actualizada de la partida registral del inmueble materia de venta.',
                    'En caso actuar a través de apoderados o representación de una persona jurídica: Certificado de Vigencia de Poder expedido por SUNARP.',
                    'Declaración Jurada de Autovalúo (Impuesto Predial) incluyendo el HR y el PU, así como los Recibos de Pago de los cuatro trimestres del año en que se efectúa la transferencia.',
                    'Pago de Impuesto a Alcabala excepto supuestos de exoneración o inafectación.',
                    'Recibo de Pago a cuenta del Impuesto a la Renta, cuando corresponda.',
                    'Si se va a utilizar un medio de pago financiero (cheque o depósito en cuenta) hacer llegar copia del cheque o del boucher del depósito en cuenta.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText
                            primary={<Typography variant="body1">{item}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1">
                Similares requisitos se aplican a los Contratos de Permuta (debiéndose acompañar la documentación respecto a todos los inmuebles objeto de transferencia), Dación en Pago y otros en los que se transfiera la propiedad de predios.
            </Typography>
        </Stack>
    );
}

export function RequisitosEspecialesDonacion() {
    return (


        <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
            {[
                'Minuta autorizada por Abogado y suscrita por los Vendedores y Compradores.',
                'Copia de los Documentos de Identidad de los Contratantes.',
                'Copia literal actualizada de la partida registral del inmueble materia de venta.',
                'En caso actuar a través de apoderados o representación de una persona jurídica: Certificado de Vigencia de Poder expedido por SUNARP.',
                'Declaración Jurada de Autovalúo (Impuesto Predial) incluyendo el HR y el PU, así como los Recibos de Pago de los cuatro trimestres del año en que se efectúa la transferencia.',
                'Pago de Impuesto a Alcabala excepto supuestos de exoneración o inafectación.',
                'Si se va a utilizar un medio de pago financiero (cheque o depósito en cuenta) hacer llegar copia del cheque o del boucher del depósito en cuenta.',
                'En el caso de anticipo de legítima, que es una donación a los herederos forzosos (hijos y padres) no se requiere el pago del Impuesto de Alcabala, pero debe acompañarse las correspondientes partidas de nacimiento expedidas por la Municipalidad correspondiente.'
            ].map((item, idx) => (
                <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                    <ListItemText
                        primary={<Typography variant="body1">{item}</Typography>}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export function RequisitosEspecialesOtorgamientoPoderes() {
    return (
        <Stack spacing={1}>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta autorizada por Abogado (Opcional).',
                    'Copia del Documento de Identidad del otorgante del poder.',
                    'Si se va a delegar un poder ya otorgado, acompañar certificado de vigencia del poder que se va a delegar.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText
                            primary={<Typography variant="body1">{item}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1">
                No se requiere que la persona a quien se otorga el poder intervenga en la Escritura Pública, pero sí se requieren sus datos de identidad exactos. Estos requisitos son aplicables a poderes que otorga una persona natural. Si los poderes son otorgados por una Persona Jurídica (Sociedades, Asociaciones, etc.), se requerirá el Acta.
            </Typography>
        </Stack>
    );
}

export function RequisitosEspecialesConstitucionEmpresas() {
    return (
        <Stack spacing={1}>

            <Typography variant="body1">
                Se solicita al Usuario los siguientes requisitos:
            </Typography>

            <List sx={{ pl: 4, listStyleType: 'decimal' }}>
                {[
                    'Fotocopia de los DNI de los solicitantes con Datos Personales',
                    'Reserva de nombre emitido por registros públicos vigente',
                    'Domicilio de la Empresa donde va funcionar la empresa (domicilio comercial)',
                    'Socios que van a Desempeñar Cargos en la empresa como Gerente y/o Sub Gerente y demás datos personales como nombre, DNI, estado civil, Profesión y/o ocupación y demás pertinentes.',
                    'Objeto social que va regir las actividades de la empresa elaborado por el usuario, considerando que la empresa de ser EIRL, SAC, SRL y demás precisando que este objeto responde a los requerimientos y necesidades que vaya a tener el usuario',
                    'Monto del capital social porcentaje de cada socio y su equivalente en moneda nacional en lo que se determina el Porcentaje de Participación y/o acciones de cada socio',
                    'Elaboración de minuta en base a la forma societaria elegida por el usuario sea esta EIRL, SAC, SRL u otra',
                    'Se fija el Monto que corresponde a la Escritura Pública en su totalidad de acuerdo a la complejidad de la misma conforme a ley, debiendo ser cancelado el servicio',
                    'Revisión de la minuta por los otorgantes y con su aprobación se procede a la elevación a escritura pública',
                    'Lectura de la escritura pública a cargo de los otorgantes',
                    'Toma de firmas de los otorgantes',
                    'Conversión a partes notariales los mismos que se suben al Sistema SID SUNARP previo pago a la zona Registral N° X sede Cusco',
                    'Se remite vía sistema a la señora Notaria para que ella realice el procedimiento de revisión y firma digital',
                    'Transcurridos aproximado 5 días el sistema remite la inscripción registral correspondiente, el que se imprime, se elabora el testimonio, se hace entrega del mismo a los otorgantes quienes firman la recepción en el libro de entrega de documentos',
                    'En el testimonio se incluye donde aparece la inscripción Registral',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText
                            primary={<Typography variant="body1">{item}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosEspecialesConstitucionSociedades() {
    return (
        <Stack spacing={1}>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta autorizada por Abogado y suscrita por todos los que constituyen la sociedad.',
                    'Copia de los Documentos de Identidad de los Contratantes.',
                    'Si los bienes aportados al capital social son bienes muebles, acompañar Declaración Jurada de Recepción de Bienes formulada por el Gerente General, indicando la valorización comercial de cada uno de los bienes aportados y su recepción conforme en representación de la sociedad.',
                    'Si los bienes aportados al capital están constituidos por dinero en efectivo, acompañar el boucher o constancia de depósito del capital a nombre de la sociedad, en una entidad del Sistema Financiero. Cuidar que el monto del depósito coincida con el indicado en la minuta y que se consigne el nombre de la sociedad. La entidad del Sistema Financiero para la apertura de la cuenta a nombre de la sociedad exigirá, normalmente, copia de la minuta con sello de ingreso a la Notaría.',
                    'Si se aporta al capital social bienes inmuebles inscritos en el Registro de Predios o vehículos inscritos en el Registro Vehicular, acompañar copia literal de la partida registral donde se encuentra inscrito el inmueble o vehículo a favor de los socios que aportan dichos bienes.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1">
                Se recomienda que, previamente, se verifique que no existe registrado el mismo nombre o similar al que pretende adoptar la sociedad materia de constitución. Si se desea mayor seguridad, se puede efectuar el trámite de Reserva de Preferencia Registral de la Denominación Social.
            </Typography>
        </Stack>
    );
}

export function RequisitosAumentoCapitalSociedades() {
    return (

        <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
            {[
                'Minuta autorizada por Abogado y suscrita por la persona designada en el Acuerdo de Aumento de Capital Social.',
                'Libro de Actas de Junta Generales de la Sociedad, en el cual conste el acuerdo adoptado respecto al aumento de capital social.',
                'Copia de los Documentos de Identidad de la persona que suscribe la minuta.',
                'Si los bienes aportados al capital social son bienes muebles, acompañar Declaración Jurada de Recepción de Bienes formulada por el Gerente General e Informe indicando la valorización comercial de cada uno de los bienes aportados.',
                'Si los bienes aportados al capital están constituidos por dinero en efectivo, acompañar el boucher o constancia de depósito del capital a nombre de la sociedad, en una entidad del Sistema Financiero.',
                'Si se aporta al capital social bienes inmuebles inscritos en el Registro de Predios o vehículos inscritos en el Registro Vehicular, acompañar copia literal de la partida registral donde se encuentra inscrito el inmueble o vehículo a favor de los socios que aportan dichos bienes.',
                'Si el aumento es por capitalización de créditos o resultado de operaciones contables, se debe adjuntar Constancia o Boucher contable, en el que figure el aumento en la cuenta capital, debidamente suscrito y sellado por Contador Público Colegiado.',
            ].map((item, idx) => (
                <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                    <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                </ListItem>
            ))}
        </List>

    );
}

export function RequisitosConstitucionHipoteca() {
    return (
        <Stack spacing={1}>
            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta autorizada por Abogado y suscrita por quien constituye la hipoteca y la persona a cuyo favor se constituye la hipoteca.',
                    'Copia de los Documentos de Identidad de los Contratantes.',
                    'Copia literal actualizada de la partida registral del inmueble materia de hipoteca.',
                    'En caso actuar a través de apoderados o representación de una persona jurídica: Certificado de Vigencia de Poder expedido por SUNARP.',
                    'Si se trata de un mutuo dinerario (préstamo de dinero) respaldado por con la hipoteca que se constituye, y se entrega el dinero en el mismo acto de constitución de hipoteca, se recomienda utilizar un medio de pago financiero (cheque o depósito en cuenta). En este caso, hacer llegar copia del cheque o del boucher del depósito en cuenta.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosLevantamientoHipoteca() {
    return (
        <Stack spacing={1}>
            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta autorizada por Abogado y suscrita por la persona a cuyo favor se constituye la hipoteca. Opcionalmente, puede también firmar la minuta el deudor hipotecario.',
                    'Copia de los Documentos de Identidad de los Contratantes.',
                    'Copia literal actualizada de la partida registral del inmueble materia de levantamiento de hipoteca.',
                    'En caso actuar a través de apoderados o representación de una persona jurídica: Certificado de Vigencia de Poder expedido por SUNARP.',
                    'Si conjuntamente con el levantamiento de la hipoteca se está efectuando el pago de un mutuo dinerario, se recomienda utilizar un medio de pago financiero (cheque o depósito en cuenta). En este caso, hacer llegar copia del cheque o del boucher del depósito en cuenta.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosInmovilizacionTemporalInmueble() {
    return (
        <Stack spacing={1}>
            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta debidamente firmada por el (los) propietario(s) del inmueble (titular registral) y autorizada por abogado, que contenga la manifestación del propietario de Inmovilizar temporalmente el predio.',
                    'Declaración jurada con firma legalizada de el(los) propietario(s) que indique que no existe acto de disposición, carga o gravamen voluntario, no inscrito de fecha cierta anterior.',
                    'Copia de Documentos de Identidad de los Contratantes.',
                    'En caso de actuar a través de apoderados: Certificado de Vigencia de Poder actualizado expedido por SUNARP.',
                    'Copia literal actualizada de la partida registral inmueble materia de inmovilización.',
                    'Sobre el inmueble no debe existir títulos pendientes de calificación referidos a actos de disposición, carga o gravamen.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosLevantamientoInmovilizacion() {
    return (
        <Stack spacing={1}>
            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta debidamente firmada por el(los) propietario(s) del inmueble (titular registral) y autorizada por abogado, que contenga la manifestación del propietario de dejar sin efecto la Anotación de Inmovilización Temporal antes del vencimiento del plazo que solicitó.',
                    'Copia de Documentos de Identidad de los Contratantes.',
                    'En caso de actuar a través de apoderados: Certificado de Vigencia de Poder actualizado expedido por SUNARP.',
                    'Copia literal actualizada de la partida registral inmueble materia de inmovilización.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

// -----------------------------------------------------------------

export function RequisitosSucesionIntestada() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1">
                Solicitud dirigida al notario, autorizada por abogado; en dicha solicitud se consignarán los siguientes datos:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Datos personales del solicitante.',
                    'Petitorio o materia de la solicitud.',
                    'Nombres de los presuntos herederos y sus domicilios.',
                    'Fundamentos de hecho y de derecho.',
                    'Relación de bienes conocidos, de ser el caso.',
                    'Indicar los medios probatorios que se adjuntan.',
                    'Firma de los solicitantes.',
                    'Fecha.',
                ].map((item, idx) => (
                    <ListItem key={idx} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1" fontWeight="bold">
                Anexos que se deben acompañar a la solicitud:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Copia legible del documento de identidad del o los solicitantes, vigentes y con la constancia de la última votación.',
                    'Copia certificada de la partida de defunción.',
                    'Copia certificada de la partida de matrimonio (En caso que el causante tuviera a su cónyuge vivo).',
                    'Copias certificadas de las partidas de nacimiento o documento público que contenga el reconocimiento o la declaración judicial, si se trata de hijo extramatrimonial o adoptivo.',
                    'Certificado negativo de sucesión intestada (Zona Registral de Cusco).',
                    'Certificado negativo de testamento (Zona Registral de Cusco).',
                ].map((item, idx) => (
                    <ListItem key={`anexo-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1" fontWeight="bold">
                Trámite:
            </Typography>

            <Typography variant="body1">
                Calificada la documentación se realizan las publicaciones (en el Diario Oficial y en otro de mayor circulación); anotación preventiva y notificaciones a los presuntos herederos. 15 días útiles después de la última publicación se procede a expedir el acta de sucesión intestada, la cual será inscrita en el Registro de Personas Naturales y si fuera el caso en el Registro de Propiedad Inmueble o Registro Vehicular.
            </Typography>
        </Stack>
    );
}

export function RequisitosRectificacionPartidas() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold">
                Requisitos:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Minuta dirigida al notario, autorizada por abogado; en dicha solicitud se consignará los siguientes datos:',
                    'Datos personales del solicitante.',
                    'Petitorio; que comprende la determinación clara y concreta del error o errores en que se ha incurrido en la o las partidas respectivas. Es pertinente indicar que el error solo debe referirse errores u omisiones en nombres, apellidos, u otros que resultan evidentes del tenor de las propias partidas o de otros documentos probatorios. No puede invocarse para cambio de nombre y apellido.',
                    'Fundamentos de derecho.',
                    'Indicar los medios probatorios que se adjuntan.',
                    'Fecha.',
                ].map((item, idx) => (
                    <ListItem key={`req-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1" fontWeight="bold">
                Anexos que se deben acompañar a la solicitud:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Copia legible del documento de identidad del solicitante vigente y con la constancia de la última votación.',
                    'Copia certificada de la partida que se solicita rectificar.',
                ].map((item, idx) => (
                    <ListItem key={`anexo-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1" fontWeight="bold">
                Instrumentos que acrediten fehacientemente el pedido, estos pueden ser:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Partida de nacimiento.',
                    'Partida de matrimonio.',
                    'Partida de defunción.',
                    'Partida de bautismo.',
                    'DNI.',
                    'Pasaporte.',
                    'Carnet de extranjería, etc.',
                ].map((item, idx) => (
                    <ListItem key={`instrumento-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosPatrimonioFamiliar() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold">
                Requisitos:
            </Typography>

            <Typography variant="body1">
                Minuta dirigida al Notario, autorizada por abogado; en dicha minuta se consignará los siguientes datos:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Datos personales del (los) solicitante(s).',
                    'Petitorio o materia de la solicitud.',
                    'Individualización del predio que propone afectar.',
                    'Señalar a los beneficiarios con precisión del vínculo familiar que los une.',
                    'Fundamentos de derecho.',
                    'Indicar los medios probatorios que se adjuntan.',
                    'Fecha.',
                    'Firma del otorgante.',
                    'CRI de la(s) propiedad(es) a afectarse.',
                ].map((item, idx) => (
                    <ListItem key={`req-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1">
                Anexos que se deben acompañar a la minuta:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                {[
                    'Copia legible del documento de identidad del (los) otorgante(s).',
                    'Documentos públicos (partidas de nacimiento, matrimonio u otros) que acrediten el vínculo con los beneficiarios.',
                    'Certificado negativo de gravamen del predio que se pretende afectar.',
                    'Declaración expresa de no tener deudas pendientes.',
                ].map((item, idx) => (
                    <ListItem key={`anexo-${idx}`} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosDivorcioMutuoAcuerdo() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1">
                Pueden solicitar este trámite las personas que hayan contraído matrimonio con antigüedad no menor de 2 años. El matrimonio debe haber sido celebrado en Lima o tener como último domicilio conyugal uno ubicado en Lima.
            </Typography>

            <Typography variant="body1" fontWeight="bold">
                Requisitos:
            </Typography>

            <Typography variant="body1">
                Se debe presentar a la notaría la solicitud de separación convencional con firma y huella digital de ambos cónyuges, autorizada por abogado y anexar a esta:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'decimal' }}>
                {[
                    'Copia simples y legibles de los documentos de identidad de los solicitantes.',
                    'Copia certificada del acta o partida de matrimonio de los peticionantes expedida con no más de 3 meses de antigüedad respecto de la fecha de presentación de la solicitud.',
                    'Declaración jurada, con firma y huella digital de los peticionantes de no tener hijos menores de edad o mayores con incapacidad.',
                    'De ser el caso, copia certificada del acta de nacimiento del hijo menor de edad o incapaz expedida con no más de tres meses respecto de la fecha de presentación de la solicitud.',
                    'De ser el caso, copia certificada de la sentencia judicial firme o acta de conciliación que establezca los regímenes de patria potestad, tenencia, alimentos y visitas, o de curatela, alimentos y visitas en caso de tener hijo menor de edad o mayor de edad con discapacidad.',
                    'Testimonio de la escritura pública de separación de patrimonios o de sustitución o liquidación de régimen patrimonial inscrita en los Registros Públicos.',
                    'Declaración jurada con firma y huella de los solicitantes de carecer de bienes sujetos al régimen de sociedad de gananciales.',
                    'Declaración jurada del último domicilio conyugal, suscrita por ambos y con la huella digital de ambos solicitantes.',
                ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosAdopcionCapaces() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1">
                El adoptante debe tener cuanto menos 18 años más que el adoptado.
            </Typography>

            <Typography variant="body1" fontWeight="bold">
                Requisitos:
            </Typography>

            <List dense sx={{ pl: 4, listStyleType: 'decimal' }}>
                {[
                    'La minuta firmada por los solicitantes y autorizada por abogado, debe contener las expresiones de voluntad del adoptante y del adoptado y el asentimiento de los respectivos cónyuges de ser el caso.',
                    'Declaración jurada del adoptante respecto a que goza de solvencia. Esto como parte integrante de la minuta.',
                    'Copia certificada de la partida de nacimiento y de matrimonio del adoptante de ser el caso.',
                    'Copia certificada de la partida de nacimiento y de matrimonio del adoptado de ser el caso.',
                    'Documento que acredite que las cuentas de administración fueron aprobadas, si el adoptante ha sido representante del adoptado. (Mediante declaración jurada).',
                    'Testimonio del inventario de los bienes que tuviere el adoptado. En caso tuviera bienes.',
                ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosUnionDeHecho() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold">
                Requisitos:
            </Typography>

            <List dense sx={{ pl: 2, listStyleType: 'disc' }}>
                {[
                    'Solicitud con firmas y nombres de ambos solicitantes que señale el reconocimiento expreso que conviven no menos de 2 años.',
                    'Declaración jurada con firma legalizada que exprese que los solicitantes se encuentran libre de impedimento matrimonial, y que no tiene vida en común con otro varón o mujer, según sea el caso.',
                    'Certificado negativo del registro personal de cada uno de los solicitantes.',
                    'Certificado domiciliario de cada uno de los solicitantes.',
                    'Declaración jurada de 2 testigos con firmas legalizadas, que indique que los solicitantes conviven por más de 2 años continuos o más.',
                ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export function RequisitosDesalojoConIntervencionNotarial() {
    return (
        <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold">
                Desalojo con intervención Notarial: (*)
            </Typography>

            <List dense sx={{ pl: 2, listStyleType: 'disc' }}>
                {[
                    'Solicitud firmada por el solicitante y autorizada por el abogado.',
                    'Copia de Documento de Identidad.',
                    'Vigencia de Poder en caso de ser necesario.',
                    'Partida Registral del inmueble donde debe constar inscrito el contrato de arrendamiento y sus modificaciones o adendas.',
                    'Testimonio del contrato de arrendamiento y sus modificaciones o adendas. Original o copia legalizada del FUA.',
                    'Original o copia legalizada de la carta notarial.',
                    'Estado de cuenta actualizado de la cuenta que se consigna en el contrato como cuenta de depósito, en caso corresponda.',
                    'Declaración jurada respecto a que el arrendatario habita el inmueble objeto de desalojo con intervención notarial; o, que no ha cumplido con cancelar las cuotas pertinentes de acuerdo a Ley.',
                    'Intervención biométrica del solicitante.',
                ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body1" color="text.secondary">
                *Se podrán solicitar requisitos adicionales dependiendo del caso en particular.
            </Typography>
        </Stack>
    );
}
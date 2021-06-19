import { Images } from "./Images";
let i = 0;
let j;

export const banner =[
    {
        "titulo": "INNOVACIONES",
        "slogan": "Lo que mejor sabemos hacer",
        "subtitulo": "No te pierdas los lanzamientos de Oral Care, Personal Care y Home Care",
        "imagen": `${Images.Innovacion}`
    },
    {
        "titulo": "IMPLEMENTACIONES",
        "slogan": "Lo que mejor sabemos hacer",
        "subtitulo": "Conoce las prácticas que han dado resultados eficaces.",
        "imagen": `${Images.Implementaciones}`
    }
]

export const innovaciones_oral = [
    {
        _id: i++,
        fecha:" Abril 2021",
        titulo: "Lanzamiento Nuevo Régimen Encías Reforzadas",
        subtitulo: "Próximamente",
        descripcion: "Conoce el nuevo Régimen para el cuidado de tus encías, con protección antibacterial. Úsalos juntos y obtén una salud bucal completa por 12 horas*",
        imagenP: `${Images.KVZigzag_MKTJ}`,
        publicidad: [
            {
                _idP: j = 0,
                tipo: "i",
                pTitulo: "Titulo 1",
                pSrc: `${Images.KVAxion_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 2",
                pSrc: `${Images.KVHC_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 3",
                pSrc: `${Images.KVPtx_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Titulo 4",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            }
        ]
    },
    {
        _id: i++,
        fecha:"Mayo 2021",
        titulo: "Lanzamiento Nuevo Régimen Encías Reforzadas",
        subtitulo: "Próximamente",
        descripcion: "Conoce el nuevo Régimen para el cuidado de tus encías, con protección antibacterial. Úsalos juntos y obtén una salud bucal completa por 12 horas*",
        imagenP: `${Images.KVPtxjabón_MKTJ}`,
        publicidad: [
            {
                _idP: j = 0,
                tipo: "i",
                pTitulo: "Titulo 1",
                pSrc: `${Images.KVTotal12_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Titulo 2",
                pSrc: "https://www.youtube.com/embed/qhfFpl0UQr0",
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 3",
                pSrc: `${Images.KVSuavitel_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 4",
                pSrc: `${Images.KVSS_MKTJ}`,
            }
        ]
    }

];

export const innovaciones_personal = [
    {
        _id: i++,
        fecha:" Abril 2021",
        titulo: "Lanzamiento Nuevo Régimen Encías Reforzadas",
        subtitulo: "Próximamente",
        descripcion: "Conoce el nuevo Régimen para el cuidado de tus encías, con protección antibacterial. Úsalos juntos y obtén una salud bucal completa por 12 horas*",
        imagenP: `${Images.KVZigzag_MKTJ}`,
        publicidad: [
            {
                _idP: j = 0,
                tipo: "i",
                pTitulo: "Titulo 1",
                pSrc: `${Images.KVAxion_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 2",
                pSrc: `${Images.KVHC_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 3",
                pSrc: `${Images.KVPtx_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Titulo 4",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            }
        ]
    },
];

export const innovaciones_home = [
    {
        _id: i++,
        fecha:"Mayo 2021",
        titulo: "Lanzamiento Nuevo Régimen Encías Reforzadas",
        subtitulo: "Próximamente",
        descripcion: "Conoce el nuevo Régimen para el cuidado de tus encías, con protección antibacterial. Úsalos juntos y obtén una salud bucal completa por 12 horas*",
        imagenP: `${Images.KVPtxjabón_MKTJ}`,
        publicidad: [
            {
                _idP: j = 0,
                tipo: "i",
                pTitulo: "Titulo 1",
                pSrc: `${Images.KVTotal12_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Titulo 2",
                pSrc: "https://www.youtube.com/embed/qhfFpl0UQr0",
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 3",
                pSrc: `${Images.KVSuavitel_MKTJ}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Titulo 4",
                pSrc: `${Images.KVSS_MKTJ}`,
            }
        ]
    }
];

export const implementaciones_oral = [
    {
        _id: i++,
        fecha:"",
        titulo: "",
        subtitulo: "",
        descripcion: "",
        imagenP: "",
        publicidad: [
            {
                pTitulo: "",
                pSrc: "",
            }
        ]
    }
];

export const implementaciones_personal = [
    {
        _id: i++,
        fecha:"",
        titulo: "",
        subtitulo: "",
        descripcion: "",
        imagenP: "",
        publicidad: [
            {
                pTitulo: "",
                pSrc: "",
            }
        ]
    }
];

export const implementaciones_home = [
    {
        _id: i++,
        fecha:"",
        titulo: "",
        subtitulo: "",
        descripcion: "",
        imagenP: "",
        publicidad: [
            {
                pTitulo: "",
                pSrc: "",
            }
        ]
    }
]


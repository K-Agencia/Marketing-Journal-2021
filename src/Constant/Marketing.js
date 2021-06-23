import { Images } from "./Images";
let i = 0;
let j = 1000;

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
        fecha:" Julio 2021",
        titulo: "OC - Crema Dental Total 12 Clean Mint 38ml",
        subtitulo: "Próximamente",
        descripcion: `Los beneficios que ofrece este lanzamiento son:
        1. Protección Bucal Completa 
        2. Disponibilidad en las tiendas de barrio/bodegas 
        3. Nuevo Claim: Economía + Protección
        `,
        imagenP: `${Images.Total12_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "TVC",
                pSrc: `https://youtu.be/2O6olWmQ-aE`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12_Puntoventa}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12_Minegocio}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12_Poster}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12_Tapabocas}`,
            }
        ]
    },
    {
        _id: i++,
        fecha:"Junio 2021",
        titulo: "Cepillo Dental Zig Zag Charcoal ",
        subtitulo: "Próximamente",
        descripcion: "El nuevo cepillo Zig Zag Charcoal cuenta con cerdas con infusión de carbón activado en forma de V que remueven las bacterias que causan el mal olor.",
        imagenP: `${Images.Zigzag_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Zigzag_Poster}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta - Cenefa",
                pSrc: `${Images.Zigzag_Cenefa}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta - Cenefa",
                pSrc: `${Images.Zigzag_Cenefa2}`,
            }
        ]
    },
    {
        _id: i++,
        fecha:"Julio 2021",
        titulo: "Crema Dental Colgate Natural Extracts Cúrcuma",
        subtitulo: "Próximamente",
        descripcion: "La fórmula de la Crema Dental Natural Extracts Limpieza Profunda, contiene extractos de cúrcuma que remueven las bacterias de tu boca, mientras la limpia profundamente dejando un sabor refrescante a yerbabuena.",
        imagenP: `${Images.Curcuma_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Curcuma_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Curcuma_PVenta2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Curcuma_PVenta3}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Curcuma_PVenta4}`,
            }
        ]
    },
    {
        _id: i++,
        fecha:"Julio 2021",
        titulo: "Crema Dental Colgate Zero",
        subtitulo: "Próximamente",
        descripcion: "La nueva Crema Dental Colgate Zero es 0% Artificial, siendo libre de Saborizantes, Endulzantes, Colorantes y Conservantes. Además, cuenta con una fórmula en Gel Transparente con sabor a menta y hierbabuena.",
        imagenP: `${Images.Zero_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Zero_PVenta1}`,
            }
        ]
    }
];

export const innovaciones_personal = [
    {
        _id: i++,
        fecha:"Abril 2021",
        titulo: "Protex Tamaño Familiar 1.3L",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenP: `${Images.JabonProtex}`,
        publicidad: [
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            }
        ]
    },
    {
        _id: i++,
        fecha:"Julio 2021",
        titulo: "El Poder de Las Manos",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenP: `${Images.ManosProtex}`,
        publicidad: [
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            },
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            },
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            }
        ]
    },
    {
        _id: i++,
        fecha:"Enero 2021",
        titulo: "Relanzamiento de Palmolive",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenP: `${Images.Palmolive}`,
        publicidad: [
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "TVC",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            },
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Menciones",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            },
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Menciones",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            }
        ]
    },
    {
        _id: i++,
        fecha:"Enero 2021",
        titulo: "Lanzamiento Speed Stick Xtreme Night Gel 70 gr y Lady Speed Stick Talc en Crema 70 gr",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenP: `${Images.Desodorante}`,
        publicidad: [
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "TVC",
                pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            },
            // {
            //     _idP: i++,
            //     tipo: "v",
            //     pTitulo: "Menciones",
            //     pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            // },
            // {
            //     _idP: i++,
            //     tipo: "v",
            //     pTitulo: "Menciones",
            //     pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            // }
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
                _idP: i++,
                tipo: "i",
                pTitulo: "Titulo 1",
                pSrc: `${Images.KVTotal12_MKTJ}`,
            },
            {
                _idP: i++,
                tipo: "v",
                pTitulo: "Titulo 2",
                pSrc: "https://www.youtube.com/embed/qhfFpl0UQr0",
            },
            {
                _idP: i++,
                tipo: "i",
                pTitulo: "Titulo 3",
                pSrc: `${Images.KVSuavitel_MKTJ}`,
            },
            {
                _idP: i++,
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


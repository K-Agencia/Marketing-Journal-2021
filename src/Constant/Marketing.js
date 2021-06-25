import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { Images } from "./Images";
let i = 0;
let j = 1000;

export const banner = [
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
        fecha: " Julio 2021",
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
                pSrc: `https://www.youtube.com/embed/2O6olWmQ-aE`,
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
        fecha: "Junio 2021",
        titulo: "Cepillo Dental Zig Zag Charcoal ",
        subtitulo: "",
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
        fecha: "Julio 2021",
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
        fecha: "Julio 2021",
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
        fecha: "Abril 2021",
        titulo: "Protex Tamaño Familiar 1.3L",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.JabonProtex}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/214vPY5FXXY',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Julio 2021",
        titulo: "El Poder de Las Manos",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenP: `${Images.ManosProtex}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/fIz10gT-TgE',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/hQ0bT4X4EPA',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/0GIPlFHqwMc',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "Relanzamiento de Palmolive",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Palmolive}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "TVC",
                pSrc: 'https://www.youtube.com/embed/p_yjEq6CqrU',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Menciones",
                pSrc: 'https://www.youtube.com/embed/_Xsrad4Qt4M',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Menciones",
                pSrc: 'https://www.youtube.com/embed/c6Gh83UKYQI',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Lanzamiento Speed Stick Xtreme Night Gel 70 gr y Lady Speed Stick Talc en Crema 70 gr",
        subtitulo: "Próximamente",
        descripcion: "Nueva presentación de desodorantes, ahora en tubos de 70 gr de fácil aplicación y prácticos de llevar",
        imagenP: `${Images.Desodorante}`,
        publicidad: [
            // {
            //     _idP: j++,
            //     tipo: "v",
            //     pTitulo: "TVC",
            //     pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            // },
            // {
            //     _idP: j++,
            //     tipo: "v",
            //     pTitulo: "Menciones",
            //     pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            // },
            // {
            //     _idP: j++,
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
        fecha: "Mayo 2021",
        titulo: "Home Care Naturals",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.CPlaneta_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.CPlaneta_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.CPlaneta_PVenta2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.CPlaneta_PVenta3}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/AzVUQhxbAgE',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Mayo 2021",
        titulo: "Suavitel Jazmín & Eucalipto",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Suavitel_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Suavitel_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Suavitel_PVenta2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Suavitel_Poster}`,
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
        fecha: "Junio 2021",
        titulo: "Axion Antibacterial Pasta",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Axion_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Axion_Cenefa}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Axion_Poster}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Axion_PosterAxion}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/Vc6oRf-1-q4',
            }
        ]
    }
];


export const implementaciones_oral = [
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "Relanzamiento Naturals",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Naturals_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Naturals_PVenta1}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Total 12 Gums Régimen",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Total12Gums_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12Gums_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta (Aeropuerto)",
                pSrc: `${Images.Total12Gums_Aeropuerto1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta (Aeropuerto)",
                pSrc: `${Images.Total12Gums_Aeropuerto2}`,
            },
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Mouthwash Spray Total 12",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Spray_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Spray_PVenta1}`,
            }
        ]
    }
];

export const implementaciones_personal = [
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "Protex Duo Protect",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.PDuo_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PDuo_PVenta1}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PTX HWC Vaccination",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.falta}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación",
                pSrc: `${Images.PDuo_Implementacion1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación",
                pSrc: `${Images.PDuo_Implementacion2}`,
            },
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PON Charcoal",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.PCarbon_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PCarbon_PVenta1}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PON Luminous Oils",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.PLiquido_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PLiquido_PVenta1}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "Speed Stick y Leidy Speed Stick Clinical 360",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Clinical360_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Clinical360_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación",
                pSrc: `${Images.Clinical360_Valla1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación",
                pSrc: `${Images.Clinical360_Valla2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Clinical360_BanerDuo}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Clinical360_CelCep}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementation Digital",
                pSrc: 'https://www.youtube.com/embed/0xgwl8Tiwlc',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementation Digital",
                pSrc: 'https://www.youtube.com/embed/CP-7NPVOXR4',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Marzo 2021",
        titulo: "Eres Barbara",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Clinical360_KeyVisual1}`,
        imagenP2: `${Images.Clinical360_KeyVisual2}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementation Digital",
                pSrc: 'https://www.youtube.com/embed/Roe3nGnkqvM',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementation Digital",
                pSrc: 'https://www.youtube.com/embed/DVLTBhcxlQc',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementation Digital",
                pSrc: 'https://www.youtube.com/embed/44sz8IwW00o',
            }
        ]
    },
];

export const implementaciones_home = [
    {
        _id: i++,
        fecha: "Febrero 2021",
        titulo: "Fabuloso AAC Ultra Desinfectante",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Fabuloso_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Fabuloso_PVenta}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Febrero 2021",
        titulo: "Ajax Kitchen",
        subtitulo: "",
        descripcion: "",
        imagenP: `${Images.Ajax_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Areas de experiencia",
                pSrc: `${Images.Ajax_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Areas de experiencia",
                pSrc: `${Images.Ajax_PVenta2}`,
            }
        ]
    },
]


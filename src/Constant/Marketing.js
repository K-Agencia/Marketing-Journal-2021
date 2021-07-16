
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
        subtitulo: "",
        descripcion: `Este lanzamiento ofrece una protección bucal completa, disponibilidad en las tiendas de barrio y un nuevo claim: Economía + Protección`,
        imagenMiniatura: `${Images.Total12_Miniaturas}`,
        imagenP: `${Images.Total12_Principal}`,
        publicidad: [
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
                pSrc: `${Images.Total12_Poster}`,
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
                pSrc: `${Images.Total12_Tapabocas}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "TVC",
                pSrc: `https://www.youtube.com/embed/2O6olWmQ-aE`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Junio 2021",
        titulo: "Cepillo Dental Zig Zag Charcoal ",
        subtitulo: "",
        descripcion: "El nuevo cepillo Zig Zag Charcoal cuenta con cerdas con infusión de carbón activado en forma de V que remueven las bacterias que causan el mal olor.",
        imagenMiniatura: `${Images.Zigzag_Miniaturas}`,
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
                pTitulo: "Punto de venta",
                pSrc: `${Images.Zigzag_PVenta}`,
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
            },
        ]
    },
    {
        _id: i++,
        fecha: "Julio 2021",
        titulo: "Crema Dental Colgate Natural Extracts Cúrcuma",
        subtitulo: "",
        descripcion: "La fórmula de la Crema Dental Natural Extracts Limpieza Profunda, contiene extractos de cúrcuma que remueven las bacterias de tu boca, mientras la limpia profundamente dejando un sabor refrescante a yerbabuena.",
        imagenMiniatura: `${Images.Curcuma_Miniaturas}`,
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
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/D3oI4IJWpuo',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Julio 2021",
        titulo: "Crema Dental Colgate Zero",
        subtitulo: "",
        descripcion: "La nueva Crema Dental Colgate Zero es 0% Artificial, siendo libre de Saborizantes, Endulzantes, Colorantes y Conservantes. Además, cuenta con una fórmula en Gel Transparente con sabor a menta y hierbabuena.",
        imagenMiniatura: `${Images.Zero_Miniaturas}`,
        imagenP: `${Images.Zero_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Zero_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/v0U-OXeK4Uk',
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
        imagenMiniatura: `${Images.JabonProtex_Miniaturas}`,
        imagenP: `${Images.JabonProtex}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/cAwQwmBOTtA',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Julio 2021",
        titulo: "El Poder de Las Manos",
        subtitulo: "Próximamente",
        descripcion: "",
        imagenMiniatura: `${Images.ManosProtex_Miniaturas}`,
        imagenP: `${Images.ManosProtex}`,
        publicidad: [
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
        imagenMiniatura: `${Images.Palmolive_Miniaturas}`,
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
                pTitulo: "Congelado",
                pSrc: 'https://www.youtube.com/embed/_Xsrad4Qt4M',
            },
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Lanzamiento Speed Stick Xtreme Night Gel 70 g y Lady Speed Stick Talc en Crema 70 g",
        subtitulo: "",
        descripcion: "Nueva presentación de desodorantes, ahora en tubos de 70 g de fácil aplicación y prácticos de llevar",
        imagenMiniatura: `${Images.Desodorante_Miniaturas}`,
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
        imagenMiniatura: `${Images.CPlaneta_Miniaturas}`,
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
        imagenMiniatura: `${Images.Suavitel_Miniaturas}`,
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
                pSrc: `${Images.Suavitel_Poster}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Suavitel_PVenta2}`,
            },
            
            // {
            //     _idP: j++,
            //     tipo: "v",
            //     pTitulo: "Titulo 4",
            //     pSrc: 'https://www.youtube.com/embed/qhfFpl0UQr0',
            // }
        ]
    },
    {
        _id: i++,
        fecha: "Julio 2021",
        titulo: "Axion Antibacterial Pasta",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Axion_Miniaturas}`,
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
        imagenMiniatura: `${Images.Naturals_Miniaturas}`,
        imagenP: `${Images.Naturals_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Naturals_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Naturals_Ecommerce}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación (Digital)",
                pSrc: 'https://www.youtube.com/embed/80R2vn6PDTY',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Total 12 Gums Régimen",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Total12Gums_Miniaturas}`,
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
                pTitulo: "Punto de venta",
                pSrc: `${Images.Total12Gums_PVenta2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Total12Gums_Ecommerce}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Publicidad Interior (Aeropuerto)",
                pSrc: `${Images.Total12Gums_Aeropuerto2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Publicidad Exterior (Aeropuerto)",
                pSrc: `${Images.Total12Gums_Aeropuerto1}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/cSG2lGih_S8',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Abril 2021",
        titulo: "Mouthwash Spray Total 12",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Spray_Miniaturas}`,
        imagenP: `${Images.Spray_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Spray_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Spray_PVenta2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Spray_PVenta3}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Spray_PVenta4}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Spray_Ecommerce}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/G_80Qi1j4l8',
            }
        ]
    },
    {
        _id: 999,
        fecha: "Julio 2021",
        titulo: "Campaña de Equity",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Equiti_Miniaturas}`,
        imagenP: `${Images.Equiti}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Digital",
                pSrc: 'https://www.youtube.com/embed/fSDA8tMDtik',
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
        imagenMiniatura: `${Images.PDuo_Miniaturas}`,
        imagenP: `${Images.PDuo_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PDuo_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.PDuo_Ecommerce}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PTX HWC Vacunación",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Vacunacion_Miniaturas}`,
        imagenP: `${Images.Vacunacion}`,
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
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PON Charcoal",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.PCarbon_Miniaturas}`,
        imagenP: `${Images.PCarbon_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PCarbon_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.PCarbon_Ecommerce1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.PCarbon_Ecommerce2}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "PON Luminous Oils",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.PLiquido_Miniaturas}`,
        imagenP: `${Images.PLiquido_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.PLiquido_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.PLiquido_Ecommerce}`,
            }
        ]
    },
    {
        _id: i++,
        fecha: "Enero 2021",
        titulo: "Speed Stick y Lady Speed Stick Clinical 360",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Clinical360_Miniaturas}`,
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
                pTitulo: "Implementación Digital",
                pSrc: 'https://www.youtube.com/embed/0xgwl8Tiwlc',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
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
        imagenMiniatura: `${Images.EresBarbara_Miniaturas}`,
        imagenP: `${Images.Clinical360_KeyVisual1}`,
        imagenP2: `${Images.Clinical360_KeyVisual2}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
                pSrc: 'https://www.youtube.com/embed/Roe3nGnkqvM',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
                pSrc: 'https://www.youtube.com/embed/DVLTBhcxlQc',
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
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
        imagenMiniatura: `${Images.Fabuloso_Miniaturas}`,
        imagenP: `${Images.Fabuloso_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Fabuloso_PVenta}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Fabuloso_Ecommerce1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Fabuloso_Ecommerce2}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
                pSrc: 'https://www.youtube.com/embed/kORYlW-WfZI',
            }
        ]
    },
    {
        _id: i++,
        fecha: "Febrero 2021",
        titulo: "Ajax Kitchen",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.Ajax_Miniaturas}`,
        imagenP: `${Images.Ajax_Principal}`,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Punto de venta",
                pSrc: `${Images.Ajax_PVenta1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "Implementación (Ecommerce)",
                pSrc: `${Images.Ajax_Ecommerce}`,
            },
            {
                _idP: j++,
                tipo: "v",
                pTitulo: "Implementación Digital",
                pSrc: 'https://www.youtube.com/embed/tcT-0dMVS5o',
            }
        ]
    },
    {
        _id: 1000,
        fecha: "",
        titulo: "Areas de experiencia de Home Care",
        subtitulo: "",
        descripcion: "",
        imagenMiniatura: `${Images.ExperienciaKV}`,
        imagenP: ``,
        publicidad: [
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "",
                pSrc: `${Images.Experiencia1}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "",
                pSrc: `${Images.Experiencia2}`,
            },
            {
                _idP: j++,
                tipo: "i",
                pTitulo: "",
                pSrc: `${Images.Experiencia3}`,
            },
        ]
    },
]

/*
https://youtu.be/kORYlW-WfZI - Fabuloso - Alternativa al Cloro -----------------------------
https://youtu.be/G_80Qi1j4l8 - Colgate - Spray -----------------------------
https://youtu.be/cSG2lGih_S8 - Colgate - Total 12 (2) -----------------------------
https://youtu.be/tcT-0dMVS5o - AJAX -----------------------------
https://youtu.be/80R2vn6PDTY
*/
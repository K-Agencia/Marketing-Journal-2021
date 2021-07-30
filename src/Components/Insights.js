import React from 'react';
import { Images } from '../Constant/Images';
import "../css/Insights.css";

const Insights = () => {
    return (
        <div className="Insights">
            <div id="Insights" className="seccion_trends">
                <h2>2</h2>
            </div>
            <div className="seccionInsights gris">
                <h1 className="tituloInsights">Mercado</h1>
                <h3 className="subtituloInsights">FMCG Trends</h3>
                <p className="textoInsights">En Latam, la pandemia resultó en una recuperación del consumo después de un estancado en 2019.</p>
                <h2 className="tituloImgInsights">LATAM</h2>
                <img className="imgInsights" src={Images.imgInsights1} alt="" /><br />
                <hr className="lineaInsights" />
                <img className="imgInsights" src={Images.imgInsights2} alt="" /><br />
                <img className="imgInsights" src={Images.imgInsights3} alt="" /><br />
                <span className="fuenteInsights">Fuente: Kantar Q1'21</span>
                <hr />
                <p className="textoInsights">En la región Andina, las marcas privadas (PL) tienen el mayor crecimiento del mercado, enfocadas en categorías básicas como alimentos y cuidado personal</p>
                <img className="imgInsights" src={Images.imgInsights4} alt="" /><br />
                <hr />
                <img className="imgInsights" src={Images.imgInsights5} alt="" /><br />
                <p className="textoInsights">Las PL en Colombia representa el 24% del SOM a total FMCG y es el país con el mayor SOM detrás de PL en LATAM</p>
                <span className="fuenteInsights">Fuente: Kantar Q1'21</span>
                <hr />
                <img className="imgInsights" src={Images.imgInsights6} alt="" /><br />
                <span className="fuenteInsights">Fuente: Nielsen Q1'21</span>
                <hr />
                <p className="textoInsights">Los países de la región Andina con los índices de vacunación más bajos.</p>
                <h2 className="tituloImgInsights">% de población vacunada</h2>
                <img className="imgInsights" src={Images.imgInsights7} alt="" /><br />
                <span className="fuenteInsights">Fuente: Our World in Data Jun'21</span>
                <hr />
                <p className="textoInsights">En Colombia, disminuye la percepción de recesión, sin embargo las mayores preocupaciones siguen siendo la estabilidad laboral, económica y de salud</p>
                <p className="textoInsights">Comprar menos ropa nueva y reducir el entretenimiento fuera de casa, son algunas de las acciones que toman al respecto.</p>
                <img className="imgInsights" src={Images.imgInsights8} alt="" /><br />
            </div>
            <div className="seccionInsights blanco">
                <div className="contentInsights">
                    <h2 className="tituloImgInsights acciones">Acciones de ahorro</h2>
                    <img className="imgInsights" src={Images.imgInsights9} alt="" /><br />
                </div>
            </div>
            <div className="seccionInsights gris">
                <h2 className="tituloImgInsights">Mayores Preocupaciones</h2>
                <img className="imgInsights" src={Images.imgInsights10} alt="" /><br />
                <span className="fuenteInsights">Fuente: Nielsen Q1'21</span>
                <hr />
                <p className="textoInsights">A inicios del 2021, Discounters, eCommerce y  droguerías, son los Retailers con el mayor crecimiento del mercado vs el mismo periodo del 2020</p>
                <img className="imgInsights" src={Images.imgInsights11} alt="" /><br />
                <ul>
                    <li>Discounters  es el canal con mayor penetración y con el mayor mix de venta  para la canasta Colgate.</li>
                    <li>Colgate con bajo o nulo portafolio en estos Retailers</li>
                </ul>
            </div>
            <div className="seccionInsights blanco">
                <div className="contentInsights">
                    <img className="imgInsights" src={Images.imgInsights12} alt="" /><br />
                </div>                
            </div>
            <div className="seccionInsights gris">
                <img className="imgInsights" src={Images.imgInsights13} alt="" /><br />
                <span className="fuenteInsights">Fuente: Kantar Q1'21</span>
            </div>
        </div>
    );

};

export default Insights;
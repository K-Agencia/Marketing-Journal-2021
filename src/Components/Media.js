import React, { useState } from 'react';
import { Images } from '../Constant/Images';
import "../css/Media.css";
import axios from 'axios';
import posterIMG from "../img/Media/video_instagram_taliana_Moment.jpg";

const Media = () => {
  let [info, setInfo] = useState(false);
  const baseURL = "https://marketingjournal.kagencia.com/database/index.php"
  const [data, setData] = useState({
    email: ""
  });

  const peticionPost = async () => {
    setInfo(false);
    var f = new FormData();
    f.append("email", data.email);
    f.append("METHOD", "POST");
    await axios.post(baseURL, f)
      .then(response => {
        setData(response.data);
        setInfo(true);
        console.log("Insertado .. ", info);
      }).catch(error => {
        console.log(error);
      })
  }

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData)
  }
  return (
    <div className="Media">
      <div id="Media" className="seccion_trends">
        <h2>2</h2>
      </div>
      <div className="cabeceraMedia">
        <img className="imgCabeceraMedia" src={Images.imgMedia1} alt="" /><br />
      </div>
      <div className="seccionDigital">
        <div className="seccionBienvenida">
          <div className="sub">
            <img className="imgMediaBienvenida" src={Images.imgMedia2} alt="" /><br />
            <p className="textoBienvenida">En este nuevo boletín descubrirás cada <br /> lunes tips y cursos que te ayudarán a</p>
            <p className="textoBienvenida negrita">
              mejorar tus capacidades <br /> en marketing digital.
            </p>
            <p className="titulo_correo">¿Aún no lo recibes? <br />Suscríbete dejando tu correo aquí:</p>
            <div className="suscribirse">
              <input className="correoMedia" id="email" type="email" placeholder="usuario@gmail.com" onChange={(e) => handleChange(e)} value={data.email} />
              <button type="submit" className="btn_suscribir" onClick={() => peticionPost()}>SUSCRIBIRME</button>
            </div>
            <h3 className={info === true ? "mostrar" : "noMostrar"}>¡Felicitaciones, ya estas suscrito!</h3>
            <div className="seccionDegreed">
              <p>Si deseas conocer las ediciones anteriores, síguenos en el Pathway de Mindspark ingresando al siguiente enlace: <a target="blank" href="https://degreed.com/pathway/v9rm0325pj?orgsso=colgatepalmolivecompany"> https://degreed.com</a></p>
            </div>
          </div>
          <div>
            <img className="imgMediaCelular" src={Images.imgMedia3} alt="" /><br />
          </div>
        </div>
      </div>

  {/*    <img className="lineaDivisora ln" src={Images.lineaDivisora} alt="" />

       <div className="seccionCRM">
        <h2 className="TituloDigital">Próximos a lanzar nuestro programa de <br /> relacionamiento con clientes (CRM)</h2>
        <div>
          <img src={Images.imgMedia4} alt="" />
          <p>El programa de CRM nos va a permitir estar cada vez más cerca de nuestros clientes, compartir información relevante y entregar beneficios acerca de nuestros productos. <br /><br />
            Invita a tus clientes a tener en cuenta la estrategia de CRM en cada una de nuestras campañas y de esta manera poder seguir creciendo juntos nuestra base de datos. Si tienes ideas compártelas <a target="blank" href="https://forms.gle/PrKEYrBa4vDQMrax9">aquí</a>.</p>
        </div>
      </div> */}

      <div className="seccionTitleColor">
        <h2>Campaña de Protex Face <br /> con Influenciadores </h2>
      </div>
      <div className="seccionHighlight">
        <div>
          <h3 className="TituloDigital">Highlight</h3>
          <p>Se corrió el primer estudio en América Latina para corroborar cómo las campañas de influencers construyen sobre nuestras marcas. Identificamos:</p>
          <ul>
            <li>Mejora significativa en la intención de compra.</li>
            <li>Desempeño de los swipe ups en quincena.</li>
            <li>Recordación efectiva de la marca en personas que estuvieron expuestas a la campaña.</li>
          </ul>
        </div>
        {/* <VideoPlayer className="video_instagram" src={file}  poster={posterIMG} /> */}
        <video className="video_instagram" poster={posterIMG} src="https://imagenes.kagencia.com/MKT/video_instagram_taliana.mp4" controls></video>
      </div>

      <img className="lineaDivisora" src={Images.lineaDivisora} alt="" />

      <div className="seccionBrandLifts">
      <img className="BLFondo" src={Images.imgMedia8} alt="" /><img className="BLStiker" src={Images.imgMedia9} alt="" />
        <h3 className="TituloDigital">¡Llegan los Brand Lifts para medir el impacto <br /> de nuestras campañas en digital!</h3>
        <h4>A partir de Agosto/21, implementaremos <i><b>Brand Lifts</b></i></h4>
        <img className="imgTend" src={Images.imgMedia7} alt="" />
        <div>
          <img src={Images.imgMedia6} alt="" />
          <p>Son estudios dentro de las plataformas digitales (Facebook y Google) que nos validan el impacto de nuestra publicidad en la audiencia. Esto será el insumo para ajustar o potenciar nuestras campañas dependiendo de los resultados.</p>
        </div>
        <p className="sub"> Definitivamente nos ayudará a seguir garantizando campañas cada vez más impactantes.</p>
      </div>

      <img className="lineaDivisora" src={Images.lineaDivisora} alt="" />

      <div className="seccionInstagram">
        <h2 className="TituloDigital">¿Ya conoces nuestros nuevos perfiles en Instagram?</h2>
        <div>
          <p>Te invitamos a unirte a nuestra comunidad en <a href="https://instagram.com/colgatecolombia?utm_medium=copy_link">@colgatecolombia</a> y <a href="https://instagram.com/protexlatam?utm_medium=copy_link">@protexlatam</a> donde encontrarás tips útiles para el cuidado oral y personal</p>
          <img src={Images.imgMedia10} alt="" />
        </div>
      </div>

      <div className="seccionTitleColor ln">
        <h2>Síguenos e invita a tus amigos, familiares, clientes y equipo de trabajo a que se unan para seguir creciendo esta comunidad juntos.</h2>
      </div>

      <div className="seccionTuHogar">
        <h2 className="TituloDigital">Descubre trucos, consejos e inspiración en TuHogar.com</h2>
        <div className="THtext">
          <div>
            <h3>Te ayudamos a hacer tu vida y la de tu familia más fácil y divertida en todo momento.</h3>
            <p>Aquí encontrarás recetas de snacks, bebidas, postres y comidas saludables, trucos de limpieza del hogar y mucho más. </p>
            <h3 className="sub">¡Ingresa aquí y descubre nuestro contenido!</h3>
            
            <a href="https://www.tuhogar.com/es-co"><img className="IMGsub" src={Images.imgMedia12} alt="" /><br /></a>
            <a href="https://www.tuhogar.com/es-co">https://www.tuhogar.com/es-co</a>
          </div>
          <img className="THimg" src={Images.imgMedia11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Media;

// onSubmit={(e)=> submit(e)}





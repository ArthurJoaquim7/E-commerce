import style from '../Footer/Footer.module.css';

//IMG 
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import facebook from '../img/facebook.png';
import pinterest from '../img/pinterest.png';
import cert2 from '../img/cert2.png';
import cert3 from '../img/cert3.png';

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.news}>
          <h5>Receba <span className={style.color}>ofertas</span> e descontos por email</h5>
          <input type="text" placeholder="Categoria ex: Infantil" className={style.input} />
          <input type="email" placeholder="Digite seu melhor email" className={style.input} />
          <button className={style.btn}>Cadastrar</button>
        </div>
        <div className={style.footer}>
          <div className={style.f1}>
            <h4>Sobre a Fake Store</h4>
            <p>Empresa</p>
            <p>Missão e visão</p>
            <p>Meio ambiente</p>
            <p>Privacidade</p>
            <p>Acessibilidade</p>
          </div>
          {/* === */}
          <div className={style.f1}>
            <h4>Perguntas Frequentes</h4>
            <p>Entrega</p>
            <p>Garantia</p>
            <p>Forma de pagamento</p>
            <p>Sobre boletos</p>
            <p>Frete</p>
            <p>Prazo</p>
            <p>Qualidade</p>
          </div>
          {/* === */}
          <div className={style.f1}>
            <h4>Trabalhe Conosco</h4>
            <p>Central de carreiras</p>
            <p>Mande seu CV</p>
            <p>Futuras vagas</p>
            <p>Como se tornar um membro</p>
          </div>
          {/* === */}
          <div className={style.f1}>
            <h4>Certificados</h4>
            <div className={style.f1Cert}>
              <img src={cert2} className={style.icon} />
              <img src={cert3} className={style.icon} />
            </div>
          </div>
        </div>
        <div className={style.redes}>
          <h2>Siga a <span className={style.orange}>Fake Store</span>!</h2>
          <div className={style.redesIcons}>
            <img src={instagram} className={style.icon}

            />
            <img src={youtube} className={style.icon}
            />
            <img src={twitter} className={style.icon} />
            <img src={facebook} className={style.icon}

            />
            <img src={pinterest} className={style.icon}
            />
          </div>
        </div>
      </div>
    </div>


  );
};

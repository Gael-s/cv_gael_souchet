import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Photodemoi from "../Images/Photo_de_moi-leger.jpg";
import renault from "../Images/Marque_auto/renault.png";
import bmw from "../Images/Marque_auto/bmw.png";
import holden from "../Images/Marque_auto/holden.png";
import opel from "../Images/Marque_auto/opel.png";
import porsche from "../Images/Marque_auto/porsche.png";
import styledesign from "../Images/Marque_auto/style-design.png";
import soustraitants from "../Images/Marque_auto/logo_sous-traitants.png";
import bascan from "../Images/Formation/logo_bascan.png";
import reaumur from "../Images/Formation/Logo_reaumur.png";

import ordinateur from "../Images/Divers/ordinateur.svg";
import imp3d from "../Images/Divers/imp3d.svg";
import jeuxvideo from "../Images/Divers/jeuxvideo.svg";
import coureur from "../Images/Divers/coureur.jpg";
import etc from "../Images/Divers/etc.jpg";
import raspi from "../Images/Divers/Raspi.png";

import reactimg from "../Images/Formation_WCS/react-javascript-logo-1.png";
import javascript from "../Images/Formation_WCS/js-logo.png";
import html from "../Images/Formation_WCS/html-css-js.png";
import mysql from "../Images/Formation_WCS/mysql.svg";
import git from "../Images/Formation_WCS/git.png";

import cv from "./CV_Gael_SOUCHET.pdf";

import "./Cv.scss";

function Cv() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="cv">
        <section
          data-aos="zoom-out-right"
          data-aos-duration="3000"
          className="container__gauche"
        >
          <section className="container__presentation">
            <img
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="3000"
              src={Photodemoi}
              alt="photo_de_moi"
            />
            <div className="presentation">
              <h2>Qui suis je ?</h2>
              <p>
                Modeleur numérique Automobile spécialisé sur le logiciel
                Autodesk Alias design.
              </p>
              <p>
                J&apos;ai travaillé avec divers constructeurs automobile durant 19
                ans en tant que Modeleur numérique Free lance.
              </p>
              <p>
                J&apos;ai eu l&apos;opportunité de travailler en France, Allemagne,
                Australie dans les studios de design des constructeurs
                automobiles.
              </p>
            </div>
            <div className="button">
              <a href={cv} download>
                Télécharger mon CV au format pdf
              </a>
            </div>
            <div className="container__contact">
              <h2>Contact</h2>
              <div className="container__contact__flex">Gaël SOUCHET</div>

              <div className="container__contact__flex">
                Tèl: 06 88 39 70 90
              </div>
              <div className="container__contact__mail">
                <a href="mailto:gael.souchet@gmail.com">
                  gael.souchet@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section className="container__competences">
            <h2>Compétences</h2>
            <div className="block__competences">
              <h3>Langues</h3>
              <ul>
                <li>Français, langue natale</li>
                <li>Anglais niveau professionnel</li>
                <li>Allemand basic </li>
              </ul>
            </div>
            <div className="block__competences">
              <h3>Modelage Numérique</h3>
              <ul>
                <li>Autodesk / Alias Design / Vred</li>
                <li>Pilotage de projet modelage</li>
                <li>Validation Qualité Design</li>
                <li>Modelisation classe A</li>
                <li>Sketch modelling</li>
                <li>Photoshop</li>
              </ul>
            </div>
            <div className="block__competences">
              <h3>Développement Web</h3>
              <ul>
                <li>HTML 5 / CSS 3</li>
                <li>PHP / MySQL</li>
                <li>JavaScript</li>
                <li>Sql</li>
                <li>React</li>
              </ul>
            </div>
            <div className="block__competences">
              <h3>Architecture</h3>
              <ul>
                <li>Archicad</li>
                <li>Twinmotion</li>
              </ul>
            </div>
            <div className="block__competences">
              <h3>Personnelles</h3>
              <ul>
                <li>Travail en équipe</li>
                <li>Adaptation</li>
                <li>Créativité</li>
                <li>curiosité</li>
                <li>Autonomie</li>
              </ul>
            </div>
          </section>

          <section className="container__interets">
            <h2>Centre d&apos;intérêt</h2>
            <div className="interets__img">
              <div>
                <img
                  data-aos="flip-right"
                  data-aos-duration="3000"
                  src={ordinateur}
                  alt="Ordinateur"
                />
                <div>developpement informatique</div>
              </div>
              <div>
                <img
                  data-aos="flip-right"
                  data-aos-duration="3000"
                  src={raspi}
                  alt="Raspberry Pi"
                />
                <div>Raspberry PI</div>
              </div>
              <div>
                <img
                  data-aos="flip-right"
                  data-aos-duration="3000"
                  src={imp3d}
                  alt="Impression3d"
                />
                <div> Impression 3d</div>
              </div>
              <div>
                <img
                  data-aos="flip-right"
                  data-aos-duration="3000"
                  src={jeuxvideo}
                  alt="Gaming"
                />
                <div>Gaming</div>
              </div>
              <div>
                <img
                  data-aos="flip-right"
                  data-aos-duration="3000"
                  src={coureur}
                  alt="Sport"
                />
                <div>Sport</div>
              </div>
              <div>
                <img src={etc} alt="etc" />
              </div>
            </div>
          </section>
        </section>

        <section
          data-aos="zoom-out-left"
          data-aos-duration="3000"
          className="container__droite"
        >
          <section className="container__experienceweb">
            <h2>
              Formation au développement Web - Septembre 2020 à aujourd&apos;hui
            </h2>
            <h3>Wild Code School - La Loupe </h3>
            <h4>Septembre 2020 - Aujourd&apos;hui</h4>
            <div className="experienceweb__img">
              <img
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={reactimg}
                alt="react"
              />
              <img
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={javascript}
                alt="javascript"
              />
              <img
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={html}
                alt="html"
              />
              <img
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={mysql}
                alt="MySql"
              />
              <img
                data-aos="flip-up"
                data-aos-delay="500"
                data-aos-duration="3000"
                src={git}
                alt="git"
              />
            </div>
          </section>

          <section className="container__experience">
            <h2>
              Expériences en design/conception automobile - 2001 à Septembre
              2020
            </h2>
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={styledesign}
                  alt="Logo style-design"
                />
              </div>
              <div>
                <h3>Style & Design</h3>
                <h4>
                  Responsable métier modelage numérique / Validation Qualité
                  Design
                </h4>
                <h4>Janvier 2017 - Novembre 2018</h4>
              </div>
              <div>
                <h5>Responsable métier modelage numérique</h5>
                <ol>
                  <li>
                    pilotage de projets intérieurs et extérieurs pour Renault et
                    Alstom
                  </li>
                  <li>Modelage numérique en vue de validation de maquette</li>
                  <li>
                    Participation au jury d&apos;examen modelage physique lycée
                    Berthelot/Questembert
                  </li>
                </ol>
                <h5>Validation Qualité Design</h5>
                <ol>
                  <li>Pilotage de l&apos;activité</li>
                  <li>
                    cotation des pièces durant les phases de réalisation
                    d&apos;outillages
                  </li>
                  <li>
                    Suivi & pilotage des réunions entre concepteurs,
                    fournisseurs, graineurs, outilleurs
                  </li>
                </ol>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={soustraitants}
                  alt="Logo sous-traitants"
                />
              </div>
              <div>
                <h3>
                  Travail en tant qu&apos;indépendant pour divers sous-traitants
                  automobile
                </h3>
                <h4>Modeleur Numérique classe A</h4>
                <h4>Octobre 2011 - Décembre 2016</h4>
              </div>
              <div>
                <p>
                  Divers travaux de modélisation en vue de mise en production
                </p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={porsche}
                  alt="Logo Porsche"
                />
              </div>
              <div>
                <h3>Porsche design Stuttgart Allemagne</h3>
                <h4>Modeleur Numérique classe A</h4>
                <h4>Juin 2010 - Septembre 2011</h4>
              </div>
              <div>
                <p>
                  Modélistion en équipe de l&apos;interieur du concept car sport
                  turismo
                </p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={bmw}
                  alt="Logo BMW"
                />
              </div>
              <div>
                <h3>BMW design Munich Allemagne</h3>
                <h4>Modeleur Numérique classe A</h4>
                <h4>Septembre 2009 - Mai 2010</h4>
              </div>
              <div>
                <p>Modélistion en équipe de l&apos;interieur du concept car i3</p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={holden}
                  alt="Logo Holden"
                />
              </div>
              <div>
                <h3>Holden design Melbourne Australie</h3>
                <h4>Modeleur Numérique classe A</h4>
                <h4>Janvier 2008 - Décembre 2008</h4>
              </div>
              <div>
                <p>Modélisation classe A et maquettage numerique</p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={opel}
                  alt="Logo Opel"
                />
              </div>
              <div>
                <h3>Opel design Rüsselsheim Allemagne</h3>
                <h4>Modeleur Numérique classe A</h4>
                <h4>Février 2006 - Décembre 2007</h4>
              </div>
              <div>
                <p>Modélisation classe A et maquettage numerique</p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={renault}
                  alt="Logo Renault"
                />
              </div>
              <div>
                <h3>Renault Design Guyancourt</h3>
                <h4>Dessinateur Plan De Forme</h4>
                <h4>Avril 2001 - Février 2006</h4>
              </div>
              <div>
                <p>
                  Modélisation Classe A de véhicule dans le but d&apos;une mise en
                  production
                </p>
              </div>
            </div>
          </section>

          <section className="container__formation">
            <h2>Formation - de 1995 à 2001</h2>
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={reaumur}
                  alt="lycée Réaumur LAVAL"
                />
              </div>
              <div>
                <h3>Lycée Réaumur - LAVAL (53)</h3>
                <h4>1998 - 2001</h4>
              </div>
              <div>
                <p>BTS/Conception et Réalisation de Carrosserie</p>
              </div>
            </div>
            <hr />
            <div>
              <div>
                <img
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  src={bascan}
                  alt="Lycée Louis Bascan RAMBOUILLET"
                />
              </div>
              <div>
                <h3>Lycée Louis BASCAN - RAMBOUILLET (78)</h3>
                <h4>1995 - 1998</h4>
              </div>
              <div>
                <p>BAC STI Génie Mécanique</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Cv;

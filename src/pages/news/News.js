import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { TiPrinter } from "react-icons/ti";
import SecondGrid from "../../components/grid/secondgrid/SecondGrid";
import { Outlet, Link } from "react-router-dom";
import "./news.scss";

const News = () => {
  return (
    <div>
      <div className="container">
        <nav class="breadcrumb">
          <a
            href="/"
            style={{ opacity: "50%", color: "black", textDecoration: "none" }}
          >
            Home
          </a>
          <span class="separator">{">>"}</span>
          <a
            href="/news"
            style={{ opacity: "50%", color: "black", textDecoration: "none" }}
          >
            Cars
          </a>
          <span class="separator">{">>"}</span>
          <a
            href="/categoryList"
            style={{ color: "#b51722", textDecoration: "none" }}
          >
            Electric vehicles
          </a>
        </nav>
        <div className="col-lg-12"> 
        <div className="row">
          <div className="rowtitle">
            <h4 style={{ color: "#b51722" }}>
              {" "}
              CARS{" "}
              <span
                style={{
                  backgroundColor: "#47689e",
                  color: "white",
                  opacity: "100%",
                }}
              >
                03/12/2024
              </span>
            </h4>
            <div className="soc-icons">
              <AiOutlineFacebook style={{ color: "#13479c" }} />
              <LiaTwitterSquare style={{ color: "#12d5db" }} />
              <LiaLinkedin style={{ color: "#0c6e9c" }} />
              <TiPrinter style={{ color: "#8d9ea6" }} />
            </div>
          </div>

          <h1 style={{ fontWeight: "700" }}>
            {" "}
            Bahnbrechender Ganzjahresreifen fur Elektrofahzeuge von Vredestein
            setzt neue Masstabe
          </h1>
          <div className="simpletitle">
            <h6 className="leftline"> 12. Oktober 2023. </h6>
            <h6> Mag. Heinz Muller</h6>
          </div>

          <div className="col-12">
            <img
              src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-lg-3">
            <img
              src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-3">
            <img
              src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-3">
            <img
              src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-3">
            <img
              src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
              style={{ width: "100%" }}
            />
          </div>
          <h4 className="minititle">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <div className="row">
            <div className="col-lg-9">
              <img
                src="https://advertising.symple.ch/www/images/84529c2e9eb33d357352ca9fdae9737e.gif"
                alt=""
                title=""
                border="0"
                width="100%"
              />
              <br /> <br />
              <p>
                {" "}
                Dies Österreich ist eine kleine Welt, in der die große ihre
                Probe hält“, schrieb Christian Friedrich Hebbel im Jahr 1862.
                „Und waltet erst bei uns das Gleichgewicht, so wird’s auch in
                der andern wieder licht.“ Ein interessantes Zitat, das mehr als
                160 Jahre später wieder seine Gültigkeit hat, und zwar in
                -Zusammenhang mit den Agenturverträgen. Begonnen hat es, wir
                erinnern uns, im September 2021: Damals startete Mercedes in
                Österreich mit dem Agenturvertrieb – als erstem Land in Europa,
                in dem Pkws und Vans gemeinsam in diesem neuen System gemanagt
                wurden. Und obwohl man die Umstellung (gemeinsam mit dem
                Händlerverband) mehr als zwei Jahre vorbereitet hatte, passte
                anfangs nicht alles: „Das ist nicht ein Lichtschalter, den man
                umlegt“, bilanzierte Importeurschef Carsten Dippelt wenige
                Monate später: „Wir hatten -Herausforderungen und es hat nicht
                alles auf Knopfdruck so funktioniert, wie wir es uns gewünscht
                haben.“
                <br /> Da viele Funktionen (etwa die Verwaltung der
                Vorführautos) von den Händlern zum Importeur gewandert sind,
                wurde in der Zentrale in Salzburg das Personal um 25 Prozent
                aufgestockt. Auch heute läuft es bei Mercedes noch nicht
                wirklich rund; dafür sprechen auch viele rote (also
                unterdurchschnittlich bewertete) Punkte im -aktuellen
                „Händlerradar“. Bei Stellantis wurde (mit Österreich als einem
                von 4 betroffenen Ländern) der Start des Agentursystems um rund
                ein halbes Jahr auf Anfang September 2023 verschoben. Doch läuft
                noch immer bei Weitem nicht alles nach Plan: Von Vorführwagen,
                die von Partner A zu Retailer B verschoben wurden, nur um 2
                Wochen später wieder bei Firma A zu landen, ist die Rede. Auch
                diverse IT-Schwächen wurden bei Weitem nicht ausgemerzt, sodass
                Autos nicht angemeldet werden können. Das ist auch eine Folge
                der Personaleinsparungen, die rund um den Jahreswechsel 2022/23
                durchgeführt wurden.
              </p>
              <img src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png" style={{width:'100%'}} />{" "}
              <br />
              <br />
              <img
                src="https://advertising.symple.ch/www/images/84529c2e9eb33d357352ca9fdae9737e.gif"
                alt=""
                title=""
                border="0"
                width="100%"
              />
              <p>
                {" "}
                Dies Österreich ist eine kleine Welt, in der die große ihre
                Probe hält“, schrieb Christian Friedrich Hebbel im Jahr 1862.
                „Und waltet erst bei uns das Gleichgewicht, so wird’s auch in
                der andern wieder licht.“ Ein interessantes Zitat, das mehr als
                160 Jahre später wieder seine Gültigkeit hat, und zwar in
                -Zusammenhang mit den Agenturverträgen. Begonnen hat es, wir
                erinnern uns, im September 2021: Damals startete Mercedes in
                Österreich mit dem Agenturvertrieb – als erstem Land in Europa,
                in dem Pkws und Vans gemeinsam in diesem neuen System gemanagt
                wurden. Und obwohl man die Umstellung (gemeinsam mit dem
                Händlerverband) mehr als zwei Jahre vorbereitet hatte, passte
                anfangs nicht alles: „Das ist nicht ein Lichtschalter, den man
                umlegt“, bilanzierte Importeurschef Carsten Dippelt wenige
                Monate später: „Wir hatten -Herausforderungen und es hat nicht
                alles auf Knopfdruck so funktioniert, wie wir es uns gewünscht
                haben.“
                <br /> Da viele Funktionen (etwa die Verwaltung der
                Vorführautos) von den Händlern zum Importeur gewandert sind,
                wurde in der Zentrale in Salzburg das Personal um 25 Prozent
                aufgestockt. Auch heute läuft es bei Mercedes noch nicht
                wirklich rund; dafür sprechen auch viele rote (also
                unterdurchschnittlich bewertete) Punkte im -aktuellen
                „Händlerradar“. Bei Stellantis wurde (mit Österreich als einem
                von 4 betroffenen Ländern) der Start des Agentursystems um rund
                ein halbes Jahr auf Anfang September 2023 verschoben. Doch läuft
                noch immer bei Weitem nicht alles nach Plan: Von Vorführwagen,
                die von Partner A zu Retailer B verschoben wurden, nur um 2
                Wochen später wieder bei Firma A zu landen, ist die Rede. Auch
                diverse IT-Schwächen wurden bei Weitem nicht ausgemerzt, sodass
                Autos nicht angemeldet werden können. Das ist auch eine Folge
                der Personaleinsparungen, die rund um den Jahreswechsel 2022/23
                durchgeführt wurden.
              </p>
              <div className="picture-row">
                <div className="col-lg-4">
                  <img
                    src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src="https://autoundwirtschaft.at/NewsImages-870x580/pic41704_1-nicht-jeder-test-ist-erfolgreich.png"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <br />
              <p>
                {" "}
                Da viele Funktionen (etwa die Verwaltung der Vorführautos) von
                den Händlern zum Importeur gewandert sind, wurde in der Zentrale
                in Salzburg das Personal um 25 Prozent aufgestockt. Auch heute
                läuft es bei Mercedes noch nicht wirklich rund; dafür sprechen
                auch viele rote (also unterdurchschnittlich bewertete) Punkte im
                -aktuellen „Händlerradar“. Bei Stellantis wurde (mit Österreich
                als einem von 4 betroffenen Ländern) der Start des
                Agentursystems um rund ein halbes Jahr auf Anfang September 2023
                verschoben. Doch läuft noch immer bei Weitem nicht alles nach
                Plan: Von Vorführwagen, die von Partner A zu Retailer B
                verschoben wurden, nur um 2 Wochen später wieder bei Firma A zu
                landen, ist die Rede. Auch diverse IT-Schwächen wurden bei
                Weitem nicht ausgemerzt, sodass Autos nicht angemeldet werden
                können. Das ist auch eine Folge der Personaleinsparungen, die
                rund um den Jahreswechsel 2022/23 durchgeführt wurden.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                className="colImg"
                src="https://advertising.symple.ch/www/images/a964cfcd3dacd8eb2ab31723f9b5f8a9.jpg"
              />
              <h4 className="colTitle2"> Most read</h4>
              <hr />
              <ol>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
              </ol>
              <h4 className="h4title"> Current issue</h4>
              <hr />
              <img
                className="colImg"
                src="https://ch.awverlag.com/MedienweltImages-270x379/21_medienwelt-auto-wirtschaft-irega.jpg"
              />

              <h4 className="colTitle"> AUTO & Wirtschaft</h4>
              <h4 className="colTitleRed"> 09/2023 </h4>
              <h4 className="colTitle2"> Most read</h4>
              <hr />
              <ol>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
                <li>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisci elit.{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="ending">
                    <h3> A&W Wisseen </h3>
                    <Link to="/categoryList " target="_top" style={{textDecoration: 'none', color: '#b51722', fontWeight: '500'}}> VIEW MORE {'>>'} </Link>    
                </div>
                <hr/> 
        </div>
      </div>

      <SecondGrid />
    </div>
  );
};
export default News;

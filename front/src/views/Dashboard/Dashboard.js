import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import AccessTime from "@material-ui/icons/AccessTime";
import WarningIcon from "@material-ui/icons/Warning";
//import MedicalServicesIcon from "@material-ui/icons/MedicalServices";
import HealingIcon from "@material-ui/icons/Healing";
import BugReportIcon from "@material-ui/icons/BugReport";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import Muted from "components/Typography/Muted.js";
import NavPills from "components/NavPills/NavPills.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//graphic
import { pieChart } from "variables/charts.js";

import styles1 from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";
import styles2 from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const styles3 = {
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center",
  },
  cardCategory: {
    margin: "0",
    color: "#999999",
  },
  cardsLarge1: {
    display: "block",
    height: "90%",
  },
  cardsLarge2: {
    display: "block",
    height: "95%",
  },
};

import priceImage1 from "assets/img/plantas/img1.png";
import priceImage2 from "assets/img/plantas/img2.png";
import priceImage3 from "assets/img/plantas/img3.png";

const useStyles = makeStyles({ ...styles1, ...styles2, ...styles3 });
console.log(pieChart.data);
const info = {
  warning: {
    detonating:
      "La roya comun es causada por el hongo Puccinia polysora," +
      " La prncipal fuente de infeccion son las esporas que son dispersadas" +
      " por el viento de otros cultivos.",
    tretament:
      "Lo recomendable es aplicar medidas preventivas para" +
      " evitar el contagio. No es posible sanar las partes infectadas por" +
      " lo que se recomienda la aplicacion de fungicidas para evitar la" +
      " propagacion a las partes sanas.",
  },
  danger: {
    detonating:
      "El moteado clorotico es causado por el virus MCMV que se" +
      " transmite mediante varios tipos de insectos los cuales se alimentan" +
      " de plantas infectadas con el virus y posteriormente se alimentan de" +
      " las plantas sanas causandoles la infeccion.",
    tretament:
      "Lo recomendable es aplicar medidas preventivas para" +
      " evitar el contagio. debido a que son insectos los que proagan la" +
      " enfermedad es recmendable aplicar insecticidas.",
  },
  info: {
    detonating: "",
    tretament: "",
  },
};

export default function Dashboard() {
  const first = {
    labels: ["33.3%", "33.3%", "33.3%"],
    series: [33.3, 33.3, 33.3],
  };
  const [color, setColor] = React.useState("info");
  const [dataPie, setDataPie] = React.useState(first);
  const changueColor = () => {
    if (color === "danger") {
      setColor("info");
    } else if (color === "info") {
      setColor("warning");
    } else {
      setColor("danger");
    }
    setDataPie(first);
  };

  const getName = () => {
    let name = "";
    switch (color) {
      case "warning":
        name = "Roya Comun";
        break;
      case "danger":
        name = "Moteado Clorotico";
        break;
      default:
        name = "Planta Sana";
    }
    return name;
  };

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={2} />
        <GridItem xs={8}>
          <div className={classes.typo}>
            <Muted>
              <h3 style={{ textAlign: "center" }}>
                Desarrollo de aplicación para la detección de enfermedades en
                cultivos de milpa utilizando redes neuronales convolucionales
              </h3>
            </Muted>
          </div>
        </GridItem>
        <GridItem xs={2} />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.cardsLarge1}>
            <CardHeader>
              <br />
              <h4 className={classes.cardTitle}> {getName(color)} </h4>
            </CardHeader>
            <CardBody>
              <br />
              <NavPills
                color={color}
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 4 },
                  contentGrid: { xs: 12, sm: 12, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Detonante",
                    tabIcon: BugReportIcon,
                    tabContent: (
                      <span>
                        <p> {info[color].detonating} </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Tratamiento",
                    tabIcon: HealingIcon,
                    tabContent: (
                      <span>
                        <p> {info[color].tretament} </p>
                        <br />
                      </span>
                    ),
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.cardsLarge1}>
            <CardHeader>
              <GridContainer justify="center">
                <GridItem>
                  <br />
                  <ImageUpload
                    addButtonProps={{
                      color: "primary",
                    }}
                    changeButtonProps={{
                      color: "primary",
                    }}
                    removeButtonProps={{
                      color: "rose",
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <Button fullWidth color="success" onClick={changueColor}>
                    Analizar imagen
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <WarningIcon /> Unicamente se aceptan imagenes en formato jpg y
                png
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.cardsLarge1}>
            <CardHeader />
            <CardBody className={classes.cardHeaderHover}>
              <ChartistGraph
                data={dataPie}
                type="Pie"
                options={pieChart.options}
              />
            </CardBody>
            <CardFooter stats className={classes.cardFooter}>
              <h6 className={classes.legendTitle}>Probabilidad</h6>
              <i className={"fas fa-circle " + classes.info} /> Sana {` `}
              <i className={"fas fa-circle " + classes.warning} /> Roya Comun
              {` `}
              <i className={"fas fa-circle " + classes.danger} /> Moteado
              Clorotico
              {` `}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <h3>Informacion</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={`${classes.cardHover} ${classes.cardsLarge2}`}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder} />
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Roya Comun
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                La roya comun aparece como pequeñas postulas rojizo-anaranjadas
                con formas de cabeza de alfiler mayormente en el lado superior
                de las hojas.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={`${classes.cardHover} ${classes.cardsLarge2}`}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage2} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder} />
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Planta Sana
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                Las hojas de las plantas del maiz sanas son grandes, largas de
                un y de un color verde, sin manchas ni protuberancias.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={`${classes.cardHover} ${classes.cardsLarge2}`}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage3} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder} />
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Moteado Clorotico
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                El moteado clorotico se caracteriza por la presencia de
                numerosas motas diminutas y venas de color amarillo que corren
                paralelamente a las venas de las hojas.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import Schedule from "@material-ui/icons/Schedule";

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
};

import priceImage1 from "assets/img/plantas/img1.png";
import priceImage2 from "assets/img/plantas/img2.jpg";
import priceImage3 from "assets/img/plantas/img3.jpg";

const useStyles = makeStyles({ ...styles1, ...styles2, ...styles3 });

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={2} />
        <GridItem xs={8}>
          <div className={classes.typo}>
            <Muted>
              <h3>
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
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}> Navigation Pills Icons </h4>
            </CardHeader>
            <CardBody>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 4 },
                  contentGrid: { xs: 12, sm: 12, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Edit",
                    tabIcon: Edit,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader>
              <GridContainer justify="center">
                <GridItem>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true,
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true,
                    }}
                    removeButtonProps={{
                      color: "danger",
                      round: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <Button fullWidth color="success">
                    Analizar imagen
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Unicamente se aceptan formatos jpg y png
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader className={classes.cardHeaderHover}>
              <ChartistGraph
                data={pieChart.data}
                type="Pie"
                options={pieChart.options}
              />
            </CardHeader>
            <CardBody />
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
          <Card product className={classes.cardHover}>
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
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                main night life in Barcelona.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$899/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Barcelona, Spain
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
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
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                night life in London, UK.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$1.119/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> London, UK
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
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
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the main
                night life in Milan.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$459/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Milan, Italy
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

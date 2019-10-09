import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    card: {
      minWidth: 275
    }
  }
});

class EquationCard extends Component {
  render() {
    const { classes, item, showAnswer } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <React.Fragment>
                <Typography>{item.firstEquation}</Typography>
                <Typography>{item.secondEquation}</Typography>
              </React.Fragment>
            </Grid>
            {showAnswer ? (
              <Grid item>
                <React.Fragment>
                  <Typography>x = {item.x}</Typography>
                  <Typography>y = {item.y}</Typography>
                </React.Fragment>
              </Grid>
            ) : null}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(EquationCard);

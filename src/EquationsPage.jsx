import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import EquationCard from "./EquationCard";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class EquationsPage extends Component {
  constructor() {
    super();
    this.state = { showAnswer: false, cards: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomInt(max) {
    let rand = Math.floor(Math.random() * Math.floor(max));
    while (rand === 0) {
      rand = Math.floor(Math.random() * Math.floor(max));
    }
    return rand;
  }

  getRandomSign() {
    return Math.random() < 0.5 ? 1 : -1;
  }

  handleChange() {
    this.setState(prevState => {
      return { showAnswer: !prevState.showAnswer };
    });
  }

  handleClick() {
    let arrCards = [];
    for (let i = 0; i < 8; i++) {
      const x = this.getRandomSign() * this.getRandomInt(10);
      const y = this.getRandomSign() * this.getRandomInt(10);
      const a = this.getRandomInt(10);
      const b = this.getRandomInt(10);
      const c = this.getRandomInt(10);
      const d = this.getRandomInt(10);
      const sign1 = this.getRandomSign();
      const sign2 = this.getRandomSign();
      const ans1 = a * x + sign1 * b * y;
      const ans2 = c * x + sign2 * d * y;
      const card = {
        id: i,
        firstEquation: `${a}x ${sign1 === 1 ? "+" : "-"} ${b}y = ${ans1}`,
        secondEquation: `${c}x ${sign2 === 1 ? "+" : "-"} ${d}y = ${ans2}`,
        x: x,
        y: y
      };
      arrCards.push(card);
    }
    this.setState({ cards: arrCards });
  }

  render() {
    const { showAnswer, cards } = this.state;
    /*
    const cards = data.map(item => (
      <EquationCard key={item.id} item={item} showAnswer={showAnswer} />
    ));
    */
    const cardItems = cards
      ? cards.map(item => (
          <EquationCard key={item.id} item={item} showAnswer={showAnswer} />
        ))
      : null;
    return (
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          style={{ backgroundColor: "#cfe8fc" }}
        >
          Equations
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Button
              color="primary"
              onClick={this.handleClick}
              variant="contained"
            >
              Generate Equations
            </Button>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox checked={showAnswer} onChange={this.handleChange} />
              }
              label="Show Answers"
            />
          </Grid>
        </Grid>
        {
          //cards
          cardItems
        }
      </Container>
    );
  }
}

export default EquationsPage;

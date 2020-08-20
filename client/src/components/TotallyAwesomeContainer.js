import React from "react";
import { Container, Grid } from "semantic-ui-react";

function TotallyAwesomeContainer({ children }) {
  return (
    <Container style={{ height: "100%" }}>
      <Grid centered columns={4}>
        {children}
      </Grid>
    </Container>
  );
}

export default TotallyAwesomeContainer;

import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import ChildDetails from '../cards/child-details';
import { AssessmentSelector } from '../cards/assessment-selector';
import { Legend } from '../cards/legend';
import { Goals } from '../cards/goals';

export const EarlyLearningGoals = () => {
  return (
    <Grid hasGutter>
      <GridItem span={2}>
        <ChildDetails />
      </GridItem>
      <GridItem span={10} rowSpan={3}>
        <Goals />
      </GridItem>
      <GridItem span={2}>
        <AssessmentSelector />
      </GridItem>
      <GridItem span={2}>
        <Legend />
      </GridItem>
    </Grid>
  );
};

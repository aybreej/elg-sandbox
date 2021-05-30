import React from 'react';
import { Card, CardBody, Text } from '@patternfly/react-core';
import './legend.css';

export const Legend = () => (
  <Card>
    <CardBody>
      <Text>e=entering</Text>
      <Text>d=developing</Text>
      <Text>s=secure</Text>
    </CardBody>
  </Card>
);

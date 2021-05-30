import React from 'react';
import { Card, CardBody, Flex, FlexItem, Text } from '@patternfly/react-core';
import './assessment-selector.css';
import { Element } from '../components/goals/element';

export const AssessmentSelector = () => (
  <Card>
    <CardBody>
      <Flex flex={{ default: 'inlineFlex' }}>
        <FlexItem>
          <Element assessment="one" />
        </FlexItem>
        <FlexItem>
          <Text>on entry</Text>
        </FlexItem>
      </Flex>
      <Flex flex={{ default: 'inlineFlex' }}>
        <FlexItem>
          <Element assessment="two" />
        </FlexItem>
        <FlexItem>
          <Text>assessment 1</Text>
        </FlexItem>
      </Flex>
      <Flex flex={{ default: 'inlineFlex' }}>
        <FlexItem>
          <Element assessment="three" />
        </FlexItem>
        <FlexItem>
          <Text>assessment 2</Text>
        </FlexItem>
      </Flex>
      <Flex flex={{ default: 'inlineFlex' }}>
        <FlexItem>
          <Element assessment="four" />
        </FlexItem>
        <FlexItem>
          <Text>end of year</Text>
        </FlexItem>
      </Flex>
    </CardBody>
  </Card>
);

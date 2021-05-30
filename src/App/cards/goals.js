import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { Card, CardBody, Text } from '@patternfly/react-core';
import './goals.css';
import { Band } from '../components/goals/band';

export const Goals = () => {
  const columns = ['', '22-36 months', '30-50 months', '40-60+ months', 'elg'];
  const rows = [
    {
      cells: [
        { title: <Text>listening and attention</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>understanding</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>speaking</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>moving and handling</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>health and self-care</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>self-confidence and self-awareness</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>managing feelings and behaviour</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>making relationships</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>reading</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>writing</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>numbers</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>shape, space and measures</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>people and communities</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>the world</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>technology</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>exploring and using media and materials</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    },
    {
      cells: [
        { title: <Text>being imaginative</Text> },
        { title: <Band />, props: { column: '22-36 months' } },
        { title: <Band />, props: { column: '30-50 months' } },
        { title: <Band />, props: { column: '40-60+ months' } },
        { title: <Band elg />, props: { column: 'elg' } }
      ]
    }
  ];

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Table aria-label="Simple Table" variant="compact" cells={columns} rows={rows}>
            <TableHeader />
            <TableBody />
          </Table>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

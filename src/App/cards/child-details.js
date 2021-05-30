import React, { useState } from 'react';
import { Card, CardBody, Dropdown, DropdownItem, DropdownToggle, Text } from '@patternfly/react-core';
import PropTypes from 'prop-types';

export const ChildDetails = props => {

  const children = ['Graeme', 'Nala', 'Reuben', 'Bethany', 'Lauren'];
  const [state, setState] = useState({
    isOpen: false,
    selectedChild: children[0]
  });

  const onSelect = event => {
    setState({
      isOpen: !state.isOpen,
      selectedChild: event.currentTarget.innerHTML
    });
    onFocus();
  };

  const onToggle = isOpen => {
    setState({
      isOpen
    });
  };

  const onFocus = () => {
    const element = document.getElementById('toggle-id');
    element.focus();
  };

  const renderDropdown = props => {
    const { isOpen } = state;
    const dropdownItems = children.map(child => <DropdownItem key={child.name}>{child.name}</DropdownItem>);

    return (
      <Dropdown
        onSelect={onSelect}
        isOpen={isOpen}
        toggle={
          <DropdownToggle id='toggle-id' onToggle={onToggle}>
            {state.selectedChild}
          </DropdownToggle>
        }
        dropdownItems={dropdownItems}
      />
    );
  };

  return (
    <Card>
      <CardBody>
        {renderDropdown(props.children)}
        <Text>{props.children[0].dob}</Text>
        <Text>{props.children[0].gender}</Text>
      </CardBody>
    </Card>
  );
};

ChildDetails.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dob: PropTypes.string,
      gender: PropTypes.string
    })
  )
};

ChildDetails.defaultProps = {
  children: []
};

import React, { Component } from 'react';
import { Page, PageHeader, PageSidebar, PageSection } from '@patternfly/react-core';
import './app.css';
import { EarlyLearningGoals } from './page-sections/early-learning-goals';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  render() {
    const { isNavOpen } = this.state;

    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} theme="dark" />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        <PageSection variant="default">{EarlyLearningGoals()}</PageSection>
      </Page>
    );
  }
}

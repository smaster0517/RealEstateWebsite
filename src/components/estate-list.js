import React, { Component } from 'react';

import EstateHeader from './estates-header'
import EstateListItem from './estate-list-item'

import styles from './index.scss'

class EstateList extends Component {
  renderItems() {
    if (!this.props.estates) {
      return
    }

    return this.props.estates.map(estate => {
      return (
        <EstateListItem
          key={estate.id}
          estate={estate}
          deleteEstate={this.props.deleteEstate}
          editEstate={this.props.editEstate}
          cancel={this.props.cancel}
          showImages={this.props.showImages}
          />
      )
    })
  }

  render() {
    return (
      <table className={styles['tableContainer']}>
        <EstateHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

export default EstateList;
import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider } from 'material-ui';

const portraitStyle = {
  height: 300,
  width: 200,
  margin: 25,
  textAlign: 'center',
  backgroundColor: '#EFEFEF',
  color: '#666'
};

const MangaPortrait = ({title}) => (
  <Paper style={portraitStyle} rounded zDepth={3}>
    <h1>{title}</h1>
    <Divider />
  </Paper>
);

MangaPortrait.propTypes = {
  title: PropTypes.string.isRequired
};

export default MangaPortrait;
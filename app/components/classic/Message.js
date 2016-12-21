import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {RkConfig} from 'react-native-ui-kit';
import MessageBase from '../common/Message'

export default class MessageClassic extends MessageBase {

  getStyles() {
    return styles;
  }

}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: RkConfig.colors.white,
    alignSelf: 'flex-start',
    marginRight: 50,
    padding: 10,
    borderRadius: 20,
    marginVertical: 5
  },
  myMessageContainer: {
    backgroundColor: RkConfig.colors.primary,
    alignSelf: 'flex-end',
    marginLeft: 50,
    marginRight: 0
  },
  messageText: {
    minWidth: 32,
    fontSize: 16,
    textAlign: 'center',
    color: RkConfig.colors.black
  },
  myMessageText: {
    color: RkConfig.colors.white
  }
});